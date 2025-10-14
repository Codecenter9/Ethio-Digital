<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    public function subscribe(Request $request)
    {
        $validated = $request->validate([
            'email'   => 'required|email|max:255',
        ]);

        $email = new Subscriber();
        $email->email = $validated['email'];
        $email->save();

        return back()->with('success', 'Subscribed successfully!');
    }
}
