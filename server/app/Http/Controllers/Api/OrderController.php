<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Preference;
use App\Models\PreferenceHasOrder;
use Helper;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:show'])->only(['index', 'show']);
        $this->middleware(['permission:create'])->only(['store']);
        $this->middleware(['permission:edit'])->only(['update']);
        $this->middleware(['permission:destroy'])->only(['destroy']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $orders = [];

        $order = new Order();
        if ($search = $request->search) {
            $orders = Helper::searchData($search, $order, ['order_number']);
        } else {
            $orders = $order->orderBy('id', 'desc')->simplePaginate();
        }

        return response()->json($orders);
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
            'customer_id' => 'required|integer|exists:customers,id',
            'preference_id' => 'required|integer|unique:orders|exists:preferences,id',
        ]);

        $preferenceId = $request->preference_id;
        $customerId = $request->customer_id;

        $orderNumber = Helper::createOrderNumber($preferenceId);

        $order = new Order();
        $order->customer_id = $customerId;
        $order->description = $request->description;
        $order->preference_id = $preferenceId;
        $order->order_number = $orderNumber;
        $order->status_id = 1;
        $order->save();

        $customer = Customer::findOrFail($customerId);
        $customer->total_purchases = $customer->total_purchases + 1;
        $customer->save();

        return response()->json([
            'message' => 'Order created successfully.',
            'data' => [
                'order_id' => $order->id,
                'order_number' => $orderNumber
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
        $order = Order::findOrFail($id);
        $order->preference;
        $order->status;
        $order->customer;

        foreach ($order->preferenceHasOrder as $preference) {
            $preference->product;
        }

        return response()->json([
            'data' => $order,
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
            'status_id' => 'required|integer|exists:status,id',
        ]);

        $statusId = $request->status_id;

        $order = Order::findOrFail($id);

        if ($statusId == 3) {
            $preference = Preference::findOrFail($order->preference_id);
            $preference->refund_amount = $preference->payment_amount;
            $preference->payment_amount = 0;
            $preference->save();
        }

        $order->status_id = $statusId;

        if ($description = $request->description) {
            $order->description = $description;
        }

        $order->save();

        return response()->json([
            'message' => 'Order updated successfully.'
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
        $order = Order::findOrFail($id);

        $preferenceId = $order->preference_id;

        PreferenceHasOrder::where('preference_id', $preferenceId)->delete();

        $order->delete();

        Preference::destroy($preferenceId);

        return response()->json([
            'message' => 'Order deleted successfully.',
        ]);
    }
}
