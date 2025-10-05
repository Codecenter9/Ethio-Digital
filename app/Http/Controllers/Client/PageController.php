<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Email;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {

        return Inertia::render('Client/Home');
    }

    public function about()
    {
        return Inertia::render('Client/About');
    }

    public function teams()
    {
        $teams = User::all()->map(function ($user) {
            $user->limited_details = Str::limit($user->details, 100);
            $user->profile_url = asset('storage/' . $user->profile_photo);
            return $user;
        });

        return Inertia::render("Client/Teams", [
            "teams" => $teams
        ]);
    }

    public function singleteam($slug)
    {
        $teamMember = User::where("slug", $slug)->firstOrFail();

        if ($teamMember->profile_photo && Storage::disk('public')->exists($teamMember->profile_photo)) {
            $teamMember->profile_url = asset('storage/' . $teamMember->profile_photo);
        } else {
            $teamMember->profile_url = null;
        }

        return Inertia::render("Client/SingleTeam", compact("teamMember"));
    }

    public function projects()
    {

        return Inertia::render('Client/Projects');
    }

    public function services()
    {
        return Inertia::render('Client/Services');
    }

    public function contact()
    {
        return Inertia::render('Client/Contact');
    }

    public function news()
    {

        return Inertia::render('Client/News');
    }

    public function singlenew($slug)
    {
        $comments = Comment::where('status', false)->get();
        return Inertia::render('Client/SingleNew', [
            'slug' => $slug,
            'comments' => $comments,
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Email::create($validated);

        return back()->with('success', 'Message sent successfully!');
    }
}
