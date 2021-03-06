<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;

class getWindowsInfoController extends Controller
{
    //

    public function getSedrotOfCompany($company){

        $result = DB::table('sedrot')->where('company_name', $company)->get();
        return  $result;
    }

    public function getAllWindowsOfSedra($company, $sedra){

        $result = DB::table('windows')->where('company', $company )->where('sedra_num', $sedra )->select('fun_code', 'des')->get();
        return  $result;
    }

    public function getWindowFullObject($funCode){

        $result = DB::table('windows')->where('fun_code', $funCode)->get();
        return  $result;
    }

    public function getProfels(Request $request){
        $result = [];
        for ($i = 0 ; $i < count($request->data) ; $i++){
            array_push($result , DB::table('profel')->where('makat', $request->data[$i])->get());
        }
       return ($result);
    }
}
