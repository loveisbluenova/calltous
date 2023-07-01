<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Models\Contact;

class FrontuserController extends Controller
{
    public function contact(Request $request)
    {

        $data = array(
            'name'=>$request->name,
            'email'=>$request->email,
            'phone_no'=>$request->phone_no, 
            'moving_from'=>$request->moving_from,
            'moving_to'=>$request->moving_to,
            'message'=>$request->message
        );

        $contact = Contact::create($request->all());

        // Mail::send('mail.contactEmail', $data, function ($message) use ($request){

        //     /* Config ********** */
        //     $to_email = "jacksmith.dev32@gmail.com";
        //     $to_name  = $request->name;
        //     $subject  = "Help me";

        //     $message->subject ($subject);
        //     $message->from ($request->email, $request->name);
        //     $message->to ($to_email, $to_name);
        // });

        if(count(Mail::failures()) > 0){
            $status = 'error';
        } else {
            $status = 'success';

        }
        $status = 'success';
        

        return response()->json(['response' => $status]);
    }
}
