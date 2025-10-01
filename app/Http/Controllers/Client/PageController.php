<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Email;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $projects = Project::latest()->take(5)->get();
        $blogs = Blog::latest()->take(5)->get();
        return Inertia::render('Client/Home', ['blogs' => $blogs, 'projects' => $projects]);
    }

    public function about()
    {
        return Inertia::render('Client/About');
    }

   public function teams()
{
    $teams = User::all()->map(function ($user) {
        $user->limited_details = Str::limit($user->details, 100);
        return $user;
    });

    return Inertia::render("Client/Teams", [
        "teams" => $teams
    ]);
}

    public function singleteam($slug)
    {
        $teamMember = User::where("slug", $slug)->firstOrFail();

        return Inertia::render("Client/SingleTeam", compact("teamMember"));
    }

    public function projects()
    {
        $projects = Project::all();
        return Inertia::render("Client/Projects", compact("projects"));
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
        $blogs = Blog::all();
        return Inertia::render('Client/News', compact('blogs'));
    }

    public function singlenew($slug)
    {
        $blog = Blog::where("slug", $slug)->firstOrFail();
        $blogs = Blog::latest()->take(5)->get();
        return Inertia::render('Client/SingleNew', compact("blog", "blogs"));
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
