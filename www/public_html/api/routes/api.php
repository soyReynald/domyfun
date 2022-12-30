<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HotelController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\GalleryController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/hotels', [HotelController::class, 'index']);

Route::post('/tours', [HotelController::class, 'create']);
Route::post('/hotels', [HotelController::class, 'create']);

Route::post('/gallery', [GalleryController::class, 'create']);
// Route::post('/tours/gallery', [GalleryController::class, 'create']);