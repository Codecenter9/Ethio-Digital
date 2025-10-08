<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Email;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailController extends Controller
{
    public function index()
    {
        $emails = Email::orderBy('created_at', 'desc')->get();

        return Inertia::render('Server/Emails/Emails', ['emails' => $emails]);
    }

    public function updateemailstatus($emailId)
    {
        $email = Email::find($emailId);

        if (!$email) {
            return response()->json(['error' => 'Email not found'], 404);
        }

        $email->status = 'seen';
        $email->save();
    }
}
