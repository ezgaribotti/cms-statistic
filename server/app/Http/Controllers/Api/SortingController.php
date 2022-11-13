<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sorting;
use Illuminate\Http\Request;

class SortingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sortings = Sorting::all();

        return response()->json([
            'data' => $sortings,
        ]);
    }
}
