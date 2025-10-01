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
        $emails = Email::all();

        return Inertia::render('Server/Emails/Emails', ['emails' => $emails]);
    }
}
