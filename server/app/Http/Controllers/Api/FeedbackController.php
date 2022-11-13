<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use Helper;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $feedbacks = [];

        $feedback = new Feedback();

        if ($search = $request->search) {
            $feedbacks = Helper::searchData($search, $feedback, ['tracking_number']);
        } else {

            $feedbacks = $feedback->orderBy('id', 'desc')->simplePaginate();
        }

        return response()->json($feedbacks);
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
            'tracking_number' => 'required|unique:feedbacks|exists:orders,order_number',
            'description' => 'required',
            'sorting_id' => 'required|integer|exists:sortings,id'
        ]);

        $feedback = new Feedback();
        $feedback->tracking_number = $request->tracking_number;
        $feedback->description = $request->description;
        $feedback->sorting_id = $request->sorting_id;
        $feedback->save();

        return response()->json([
            'message' => 'Feedback created successfully.',
            'data' => [
                'feedback_id' => $feedback->id
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
        $feedback = Feedback::findOrFail($id);

        return response()->json([
            'data' => $feedback,
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
        Feedback::destroy($id);

        return response()->json([
            'message' => 'Feedback deleted successfully.'
        ]);
    }
}
