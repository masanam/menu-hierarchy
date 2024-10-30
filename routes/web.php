<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use Inertia\Inertia; // We are going to use this class to render React components

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return Inertia::render('Layout'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});

Route::get('/about', function () {
    return Inertia::render('About', ['test' => 'working']);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', ['test' => 'working']);
});

Route::get('/menu', function () {
    return Inertia::render('Menu', ['test' => 'working']);
});


Route::get('menu-tree-view',[App\Http\Controllers\MenuController::class,'manageMenu']);
Route::post('add-menu',[App\Http\Controllers\MenuController::class,'addMenu'])->name('add.menu');

