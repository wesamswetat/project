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
                        'sedra_num' => $request->sedraNum, 'subject' => $request->subject,
                        'abzarem_num_in_srtot' => $request->abzarNumInSertot ,'abzarem_makat' => $request->abzarMakat ,
                        'abzarem_kamot' => $request->abzarAmount ,'atmem_mbrashot_num_in_srtot' => $request->atamNumInSertot ,
                        'atmem_mbrashot_makat' => $request->atamMakat ,'zegog' => $request->glassFormela,
                        'glass_amount' => $request->glassAmunt, 'h_des' => $request->hDes, 'l_des' => $request->lDes
                    ]
                );

                if ($result) {

                    $ifCompanyInCompanyTable = DB::table('company')->where('company_name', $request->company)->first();
                    $ifSedraInSedrotTable = DB::table('sedrot')->where('sedra_num', $request->sedraName)->first();

                    if (!$ifCompanyInCompanyTable) {
                        DB::table('company')->insert(
                            [
                                'company_name' => $request->company
                            ]
                        );
                    }

                    if (!$ifSedraInSedrotTable) {
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

    public function addabzar(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->admin_level === 1) {
                $loopByMakat = $request->makat;
                $abzarDes = $request->abzarDes;
                $pic = $request->pic;
                for ($i = 0; $i < count($loopByMakat); $i++) {
                    DB::table('abzarem_atamem_mavreshot')->insert(
                        [
                            'company' => $request->company, 'sedra_nname' => $request->sedraName, 'sedra_num' => $request->sedraNum,
                            'is_abzarem' => $request->is_abzarem, 'is_atamem_or_mavreshot' => $request->is_atamem_or_mavreshot,
                            'makat' => $loopByMakat[$i], 'pic' => $pic[$i], 'des' => $abzarDes[$i]
                        ]
                    );
                }

            }
        }
    }

    public function addprofel(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->admin_level === 1) {
                $makat = $request->makat;
                $profelDes = $request->profelDes;
                $weight = $request->weight;
                $hekef = $request->hekef;
                $pic = $request->pic;

                for ($i = 0 ; $i < count($makat) ; $i++){
                    if (DB::table('profel')->where('makat',$makat[$i] )->first()){
                        continue;
                    }
                    DB::table('profel')->insert(
                        [
                            'company' => $request->company, 'serial_name' => $request->sedraName, 'serial' => $request->sedraNum,
                            'meshkal' => $weight[$i], 'hekef' => $hekef[$i],
                            'makat' => $makat[$i], 'pic' => $pic[$i], 'des' => $profelDes[$i]
                        ]
                    );
                }
            }
        }
    }
}
