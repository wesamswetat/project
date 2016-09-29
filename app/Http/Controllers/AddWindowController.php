<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;
use DB;

class AddWindowController extends Controller
{
    //

    public function index(){
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->admin_level === 1) {
                echo 'you are admin';
            } else {
                return redirect('/');
            }
        } else {
            echo 'first log in';
        }

        return redirect('/');
    }

    public function addWindowWithProfels(Request $request){

        if (Auth::check()) {
            $user = Auth::user();
            if ($user->admin_level === 1) {
                return json_encode($request->data);
            } else {
                return redirect('/');
            }
        } else {
            return redirect('/');
        }
    }
}
