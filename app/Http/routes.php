<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/checkuser', function () {

    if (Auth::check()) {
        $user = Auth::user();
        if ($user->admin_level === 1) {
            $arr = array('name' => $user->name, 'email' => $user->email, 'isAdmin'=> true);
        } else {
            $arr = array('name' => $user->name, 'email' => $user->email);
        }

        return json_encode($arr);
    }
    return '';
});

Route::auth();

Route::get('/home', 'HomeController@index');
Route::get('auth/logout', 'Auth\AuthController@logout');

Route::get('/admin', 'AddWindowController@index');
Route::post('/admin/addwindow', 'AddWindowController@addWindowWithProfels');
Route::post('/admin/addabzar', 'AddWindowController@addabzar');
Route::post('/admin/addprofel', 'AddWindowController@addprofel');


Route::get('/company/{name}', 'getWindowsInfoController@getSedrotOfCompany');
Route::get('/company/windows/{company}/{sedra}', 'getWindowsInfoController@getAllWindowsOfSedra');
Route::get('/window/{funcode}', 'getWindowsInfoController@getWindowFullObject');
Route::post('/profels', 'getWindowsInfoController@getProfels');