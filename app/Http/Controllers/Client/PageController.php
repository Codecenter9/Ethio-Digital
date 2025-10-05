<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Email;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $projects = Project::latest()->take(5)->get()->map(function ($project) {
            $project->image_url = asset('storage/' . $project->project_photo);
            return $project;
        });

        $blogs = Blog::latest()->take(5)->get();

        return Inertia::render('Client/Home', [
            'projects' => $projects,
            'blogs' => $blogs,
        ]);
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
        $projects = Project::all()->map(function ($project) {
            if ($project->project_photo && Storage::disk('public')->exists($project->project_photo)) {
                $project->image_url = asset('storage/' . $project->project_photo);
            } else {
                $project->image_url = null; // leave null (no default)
            }
            return $project;
        });

        return Inertia::render('Client/Projects', [
            'projects' => $projects,
        ]);
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
        $blogs = Blog::all()->map(function ($blog) {
            if ($blog->image && Storage::disk('public')->exists($blog->image)) {
                $blog->image_url = asset('storage/' . $blog->image);
            } else {
                $blog->image_url = null;
            }
            return $blog;
        });

        return Inertia::render('Client/News', [
            'blogs' => $blogs,
        ]);
    }

    public function singlenew($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();

        if ($blog->image && Storage::disk('public')->exists($blog->image)) {
            $blog->image_url = asset('storage/' . $blog->image);
        } else {
            $blog->image_url = null;
        }

        $blogs = Blog::latest()->take(5)->get()->map(function ($item) {
            if ($item->image && Storage::disk('public')->exists($item->image)) {
                $item->image_url = asset('storage/' . $item->image);
            } else {
                $item->image_url = null;
            }
            return $item;
        });

        return Inertia::render('Client/SingleNew', [
            'blog' => $blog,
            'blogs' => $blogs,
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
