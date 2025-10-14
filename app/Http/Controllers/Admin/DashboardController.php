<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Email;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
       $emails = Email::where('status', 'unseen')
    ->where('type', 'inbox')
    ->get();

$comments = Comment::where('status', 'pending')->get();

return Inertia::render('Server/Dashboard', [
    'emails' => $emails,
    'comments' => $comments,
]);

    }
}
