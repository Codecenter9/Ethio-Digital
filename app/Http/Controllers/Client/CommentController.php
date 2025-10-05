<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'blog_id' => 'required',
            'name' => 'required|string|max:100',
            'comment' => 'required|string|max:1000',
        ]);

        $comment = new Comment();
        $comment->blog_id = $validated['blog_id'];
        $comment->name = $validated['name'];
        $comment->comment = $validated['comment'];
        $comment->save();

        return back()->with('success', 'Comment added successfully.');
    }
}
