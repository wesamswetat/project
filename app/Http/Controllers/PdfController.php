<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use TCPDF;

class PdfController extends Controller
{

    //
    function getPdf(Request $request)
    {
        $data = $request->name;

        $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
        $pdf->SetCreator(PDF_CREATOR);
        $pdf->SetAuthor('Nicola Asuni');
        $pdf->SetTitle('TCPDF Example 002');
        $pdf->SetSubject('TCPDF Tutorial');
        $pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
        $pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE . ' 018', PDF_HEADER_STRING);

// set header and footer fonts
        $pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
        $pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
        $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
        $pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
        $pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
        $pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
        $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
        $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language dependent data:
        $lg = Array();
        $lg['a_meta_charset'] = 'UTF-8';
        $lg['a_meta_dir'] = 'rtl';
        $lg['a_meta_language'] = 'fa';
        $lg['w_page'] = 'page';

// set some language-dependent strings (optional)
        $pdf->setLanguageArray($lg);

// ---------------------------------------------------------

// set font
        $pdf->SetFont('dejavusans', '', 8);

// set LTR direction for english translation
        $pdf->setRTL(false);

// add a page
        $pdf->AddPage();

// set some text to print
        $txt = $data;

// output the HTML content
        $pdf->writeHTML($txt, true, 0, true, true);

// ---------------------------------------------------------

//Close and output PDF document

        //$pdf->Output("/app/example_002.pdf", 'F');  //save pdf
        //

          $pdf->Output( 'example_003.pdf', 'D');


        //return $_SERVER["DOCUMENT_ROOT"];
//        $pdf->Output(__DIR__ .'file.pdf', 'I'); // show pdf

       // $pdf->Output($_SERVER['DOCUMENT_ROOT'].'/'.'ocpdftesting.pdf', 'F');

        //readfile($pdf->Output('example_002.pdf', 'D'));
    }
}
