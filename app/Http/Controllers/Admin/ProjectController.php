<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return Inertia::render("Server/Projects/Projects", ["projects" => $projects]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_name' => 'required|string|max:255',
            'project_url' => 'nullable|max:255',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:1000',
            'project_photo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120', // 5MB
        ]);

        if ($request->hasFile('project_photo')) {
            $path = $request->file('project_photo')->store('projects', 'public');
            $validated['project_photo'] = $path;
        }

        $project = new Project();
        $project->project_name = $validated['project_name'];
        $project->project_url = $validated['project_url'] ?? null;
        $project->category = $validated['category'] ?? null;
        $project->description = $validated['description'] ?? null;
        $project->project_photo = $validated['project_photo'] ?? null;
        $project->save();

        return redirect()->back()->with('success', 'Project added successfully!');
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $validated = $request->validate([
            'project_name' => 'required|string|max:255',
            'project_url'  => 'nullable|max:255',
            'category'     => 'nullable|string|max:255',
            'description'  => 'nullable|string|max:1000',
            'project_photo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120', // 5MB
        ]);

        if ($request->hasFile('project_photo')) {
            if ($project->project_photo && Storage::disk('public')->exists($project->project_photo)) {
                Storage::disk('public')->delete($project->project_photo);
            }

            $path = $request->file('project_photo')->store('projects', 'public');
            $validated['project_photo'] = $path;
        }

        $project->project_name = $validated['project_name'];
        $project->project_url = $validated['project_url'] ?? null;
        $project->category = $validated['category'] ?? null;
        $project->description = $validated['description'] ?? null;
        $project->project_photo = $validated['project_photo'] ?? $project->project_photo;
        $project->save();

        return redirect()->back()->with('success', 'Project updated successfully!');
    }
}
