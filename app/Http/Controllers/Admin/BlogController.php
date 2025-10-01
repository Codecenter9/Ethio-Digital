<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::orderBy('date', 'desc')->get();
        return Inertia::render("Server/News/News", ['blogs' => $blogs]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string|max:2500',
            'category'    => 'nullable|string|max:255',
            'image'       => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120',
            'tags'        => 'nullable|array',
            'tags.*'      => 'string|max:50',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('blogs', 'public');
            $validated['image'] = $path;
        }

        $slug = Str::slug($validated['title']);
        $originalSlug = $slug;
        $counter = 1;
        while (\App\Models\Blog::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        if (isset($validated['tags'])) {
            $validated['tags'] = json_encode($validated['tags']);
        }

        Blog::create([
            'title'       => $validated['title'],
            'slug'        => $slug,
            'description' => $validated['description'] ?? null,
            'author'      => $user ? $user->name : 'Guest',
            'category'    => $validated['category'] ?? null,
            'image'       => $validated['image'] ?? null,
            'date'        => now(),
            'tags'        => $validated['tags'] ?? json_encode([]),
        ]);

        return redirect()->back()->with('success', 'Blog added successfully!');
    }
}
