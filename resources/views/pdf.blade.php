<?php
/**
 * Created by PhpStorm.
 * User: Wesam
 * Date: 10/24/2016
 * Time: 1:39 AM
 */

$pdf = App::make('dompdf.wrapper');
$pdf->loadHTML('<h1>Test</h1>');
return $pdf->stream();