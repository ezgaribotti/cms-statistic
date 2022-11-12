<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\GenderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProvinceController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function ()
{
    Route::controller(AuthController::class)->group(function ()
    {
        Route::get('/user-profile', 'userProfile');
        Route::put('/update-password', 'updatePassword');
        Route::get('/logout', 'logout');
    });

    Route::get("/roles", [RoleController::class, 'index']);

    Route::controller(UserController::class)->group(function ()
    {
        Route::get('/users', 'index');
        Route::post('/users', 'store');
        Route::get('/users/{id}', 'show');
        Route::put('/users/{id}', 'update');
        Route::delete('/users/{id}', 'destroy');
    });

    Route::controller(CategoryController::class)->group(function ()
    {
        Route::get('/categories', 'index');
        Route::post('/categories', 'store');
        Route::get('/categories/{id}', 'show');
        Route::put('/categories/{id}', 'update');
        Route::delete('/categories/{id}', 'destroy');
    });

    Route::get('/provinces', [ProvinceController::class, 'index']);

    Route::get('/genders', [GenderController::class, 'index']);

    Route::controller(CustomerController::class)->group(function ()
    {
        Route::get('/customers', 'index');
        Route::post('/customers', 'store');
        Route::get('/customers/{id}', 'show');
        Route::put('/customers/{id}', 'update');
        Route::delete('/customers/{id}', 'destroy');
    });

    Route::controller(ProductController::class)->group(function ()
    {
        Route::get('/products', 'index');
        Route::post('/products', 'store');
        Route::get('/products/{id}', 'show');
        Route::post('/products/{id}', 'update');
        Route::delete('/products/{id}', 'destroy');
    });
});
