<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;

class CustomersController extends Controller
{
    //

    public function hearUs(Request $request)
    {
        $result = DB::table('hear_us')->insert(['message' => $request->message]);
        if ($result) {
            return 'true';
        } else {
            return 'false';
        }
    }

    public function contacts(Request $request)
    {
        $result = DB::table('contact')->insert
        ([
            'full_name' => $request->fullName,
            'phone' => $request->phone,
            'subject' => $request->subject,
            'comments' => $request->message,
            'email' => $request->email,

        ]);
        if ($result) {
            return 'true';
        } else {
            return 'false';
        }
    }

    public function hearUsAddWindow(Request $request)
    {
        $result = DB::table('hear_us_add_window')->insert
        ([
            'comments' => $request->message,
            'company' => $request->company,
            'sedra_name' => $request->sedraName,
            'sedra_num' => $request->sedraNum,
            'email' => $request->email,
        ]);
        if ($result) {
            return 'true';
        } else {
            return 'false';
        }
    }
}
