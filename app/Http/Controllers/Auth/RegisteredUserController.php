<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    // public function store(Request $request): RedirectResponse
    // {
    //     $validated = $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|email|unique:users,email',
    //         'profile_photo' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:5120',
    //         'password' => 'required|string|min:3',
    //     ]);

    //     if ($request->hasFile('profile_photo')) {
    //         $path = $request->file('profile_photo')->store('profiles', 'public');
    //         $validated['profile_photo'] = $path;
    //     }

    //     $user = User::create([
    //         'name' => $validated['name'],
    //         'slug' => Str::slug($validated['name']),
    //         'email' => $validated['email'],
    //         'profile_photo' => $validated['profile_photo'] ?? null,
    //         'password' => Hash::make($validated['password']),
    //     ]);
    //     event(new Registered($user));

    //     // Auth::login($user);

    //     return redirect("/login");
    // }
}
