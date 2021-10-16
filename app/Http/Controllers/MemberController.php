<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class MemberController extends Controller
{
    public function index(){
        $user = Auth::user();
        return Inertia::render('Members/MemberAdd',[
            'role' => $user->role->name,
            'user' => $user
        ]);
    }

    public function show(){
        $user = Auth::user();
        return Inertia::render('Members/MemberManagement',[
            'role' => $user->role->name,
            'user' => $user
        ]);
    }
}