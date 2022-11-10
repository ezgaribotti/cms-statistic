<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = [];
        $user = new User();

        if ($search = $request->search) {
            $users = Helper::searchData($search, $user, ['username']);
        } else {
            $users = $user->simplePaginate();
        }

        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'full_name' => 'required',
            'username' => 'required|unique:users',
            'password' => 'required|confirmed',
            'role_id' => 'required|integer|exists:roles,id',
        ]);

        $roleId = $request->role_id;

        $user = new User();
        $user->full_name = $request->full_name;
        $user->username = $request->username;
        $user->role_id = $roleId;
        $user->password = Hash::make($request->password);
        $user->save();
        $user->assignRole($roleId);

        return response()->json([
            'message' => 'User created successfully.',
            'data' => [
                'user_id' => $user->id
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        $user->role;

        return response()->json([
            'data' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'full_name' => 'required',
            'password' => 'confirmed',
            'role_id' => 'required|integer|exists:roles,id',
        ]);

        $roleId = $request->role_id;

        $user = User::findOrFail($id);
        $user->full_name = $request->full_name;
        $user->role_id = $roleId;

        if ($password = $request->password) {
            $user->password = Hash::make($password);
        }

        $user->save();

        $user->removeRole($user->role_id);
        $user->assignRole($roleId);

        return response()->json([
            'message' => 'User updated successfully.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::destroy($id);

        return response()->json([
            'message' => 'User deleted successfully.'
        ]);
    }
}
