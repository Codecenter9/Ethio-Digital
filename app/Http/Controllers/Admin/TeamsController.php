<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TeamsController extends Controller
{
    public function index()
    {
        $members = User::all();
        return inertia("Server/Teams/Teams", ['members' => $members]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => 'required|string|max:255',
            'position' => 'required|string|max:255',
        ]);

        $user = new User();
        $user->name = $validated['name'];
        $user->slug = Str::slug($validated['name']);
        $user->email = $validated['email'];
        $user->position = $validated['position'];
        $user->role = $validated['role'];
        $user->password = Hash::make('1234');
        $user->save();

        return redirect()->back()->with('success', 'Members added successfully!');
    }

    public function update(Request $request, $id): RedirectResponse
    {
        $member = User::findOrFail($id);

        $validated = $request->validate([
            'name'          => 'required|string|max:255',
            'email'         => 'required|email|unique:users,email,' . $member->id,
            'phone'         => 'nullable|string|max:20',
            'password'      => 'nullable|string|min:4',
            'address'       => 'nullable|string',
            'details'       => 'nullable|string',
            'experience'    => 'nullable|string|max:255',
            'projects'      => 'nullable|string|max:255',
        ]);

        $member->name     = $validated['name'];
        $member->slug     = Str::slug($validated['name']);
        $member->email    = $validated['email'];
        $member->phone    = $validated['phone'] ?? $member->phone;
        $member->address  = $validated['address'] ?? $member->address;
        $member->details  = $validated['details'] ?? $member->details;
        $member->experience = $validated['experience'] ?? $member->experience;
        $member->projects   = $validated['projects'] ?? $member->projects;

        if (!empty($validated['password'])) {
            $member->password = bcrypt($validated['password']);
        }

        $member->save();

        return redirect()->back()->with('success', 'Profile updated successfully!');
    }

    public function updatePhoto(Request $request, $id): RedirectResponse
    {
        $member = User::findOrFail($id);
        Log::info($request->all());
        $request->validate([
            'profile_photo' => 'nullable|image|mimes:jpg,jpeg,png,gif,webp|max:5120',
        ]);


        if ($request->hasFile('profile_photo')) {
            if ($member->profile_photo && Storage::disk('public')->exists($member->profile_photo)) {
                Storage::disk('public')->delete($member->profile_photo);
            }

            $path = $request->file('profile_photo')->store('profiles', 'public');
            $member->profile_photo = $path;
            $member->save();
        }

        return redirect()->back()->with('success', 'Profile photo updated successfully!');
    }

    public function deletePhoto($id): RedirectResponse
    {
        $member = User::findOrFail($id);

        if ($member->profile_photo && Storage::disk('public')->exists($member->profile_photo)) {
            Storage::disk('public')->delete($member->profile_photo);
        }

        $member->profile_photo = null;
        $member->save();

        return redirect()->back()->with('success', 'Profile photo deleted successfully!');
    }
}
