<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Feedback;
use App\Models\Gender;
use App\Models\Order;
use App\Models\Preference;
use App\Models\Product;
use App\Models\Sorting;
use App\Models\Statistic;
use Illuminate\Http\Request;

class Data {
    function __construct($property)
    {
        foreach ($property as $key => $value) {
            $this->$key = $value;
        }
    }
}
class StatisticController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:show'])->only(['index']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $statistics = Statistic::where('year', date(chr(89)))->limit(12)->get();

        $totalCustomers = Customer::count();
        $totalOrders = Order::count();
        $totalCanceledOrders = Order::where('status_id', 2)->count();
        $totalFeedbacks = Feedback::count();

        $limitNumber = 5;

        $mostSelledProducts = Product::orderBy('total_sales', 'desc')->limit($limitNumber)->get();
        $customerLeaderboard = Customer::orderBy('total_purchases', 'desc')->limit($limitNumber)->get();
    
        $genders = Gender::all();
        $totalGenders = [];

        foreach ($genders as $gender) {
            $totalGenders[$gender->guard_name] = [
                'name' => $gender->name,
                'total_number' => Customer::where('gender_id', $gender->id)->count()
            ];
        }

        $status = ['inactive' => ['live_mode' => 0, 'name' => 'Inactivo'], 'active' => ['live_mode' => 1, 'name' => 'Activo']];

        $totalActiveCustomers = [];

        foreach ($status as $key => $property) {
            $data = new Data($property);

            $totalActiveCustomers[$key] = [
                'name' => $data->name,
                'total_number' => Customer::where('live_mode', $data->live_mode)->count()
            ];
        }

        $sortings = Sorting::all();
        $totalFeedbackRating = [];

        foreach ($sortings as $sorting) {
            $totalFeedbackRating[$sorting->guard_name] = [
                'name' => $sorting->name,
                'total_number' => Feedback::where('sorting_id', $sorting->id)->count()
            ];
        }

        $totalProfitAmount = Preference::sum('payment_amount');
        $totalRefundAmount = Preference::sum('refund_amount');

        $wallet = ['profit_amount' => ['name' => 'Ingreso total', 'total_number' => round($totalProfitAmount, 2)], 'refund_amount' => ['name' => 'Devolución total', 'total_number' => round($totalRefundAmount, 2)]];

        return response()->json([
            'data' => [
                'statistics' => $statistics,
                'total' => [
                    'customers' => $totalCustomers,
                    'orders' => $totalOrders,
                    'canceled_orders' => $totalCanceledOrders,
                    'feedbacks' => $totalFeedbacks,
                ],
                'genders' => $totalGenders,
                'active_customers' => $totalActiveCustomers,
                'feedback_rating' => $totalFeedbackRating,
                'wallet' => $wallet,
                'leaderboards' => [
                    'customers' => $customerLeaderboard,
                    'products' => $mostSelledProducts
                ]
            ]
        ]);
    }
}
