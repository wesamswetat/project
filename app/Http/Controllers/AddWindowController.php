<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;
use DB;

class AddWindowController extends Controller
{
    //

    public function index()
    {
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

    public function addWindowWithProfels(Request $request)
    {

        if (Auth::check()) {
            $user = Auth::user();
            if ($user->admin_level === 1) {

                $result = DB::table('windows')->insert(
                    [
                        'company' => $request->company, 'des' => $request->des, 'sedra_name' => $request->sedraName,
                        'fun_code' => $request->funcode, 'h_l' => $request->hl, 'profel_cuts' => $request->cuts,
                        'profel_des' => $request->profelDes, 'profel_formela' => $request->formola,
                        'profel_makat' => $request->makat, 'rowds_winds' => $request->rowdsWinds,
                        'sedra_num' => $request->sedraNum, 'subject' => $request->subject
                    ]
                );

                if ($result) {

                    $ifCompanyInCompanyTable =  DB::table('company')->where('company_name',$request->company )->first();
                    $ifSedraInSedrotTable = DB::table('sedrot')->where('sedra_num',$request->sedraName )->first();

                    if (! $ifCompanyInCompanyTable){
                        DB::table('company')->insert(
                            [
                                'company_name' => $request->company
                            ]
                        );
                    }

                    if (! $ifSedraInSedrotTable){
                        DB::table('sedrot')->insert(
                            [
                                'company_name' => $request->company, 'sedra_name' => $request->sedraName,
                                'sedra_num' => $request->sedraNum
                            ]
                        );
                    }

                    return 'true';

                } else {
                    return 'false';
                }

            } else {
                return redirect('/');
            }
        } else {
            return redirect('/');
        }
    }
}
