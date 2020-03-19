<?php

namespace App\Http\Controllers;

use App\Comments;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function getAll() {
        $comments = Comments::orderBy('updated_at', 'desc')->limit(5)->get();
        return $comments->toJson();
    }

    public function post(Request $request) {
        $validateData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'comment' => 'required',
        ]);

        $comment = Comments::create([
            'name' => $validateData['name'],
            'email' => $validateData['email'],
            'comment' => $validateData['comment'],
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        return response()->json('Comment Created');
    }

    public function getOne($id) {
        $comment = Comments::find($id);

        return $comment->toJson();
    }
}
