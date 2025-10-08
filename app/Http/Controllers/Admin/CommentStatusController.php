<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentStatusController extends Controller
{
    public function index()
    {
        $comments = Comment::all();
        return Inertia::render("Server/Comments/Comments", ['comments' => $comments]);
    }

    public function handleStatus(Request $request, $commentId)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:pending,approved,rejected,spam',
        ]);

        $comment = Comment::findOrFail($commentId);
        $comment->status = $validated['status'];
        $comment->save();

        return back()->with('success', 'Comment status updated successfully.');
    }

    public function destroy($commentId)
    {
        $comment = Comment::findOrFail($commentId);

        $comment->delete();

        return back()->with('success', 'Comment status deleted successfully.');
    }
}
