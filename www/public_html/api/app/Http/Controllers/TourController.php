<?php

namespace App\Http\Controllers;

use App\Models\tour;
use Illuminate\Http\Request;

class TourController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        $tour = new tour();
        $tour->title = $request->input('title');
        $tour->description = $request->input('description');

        $image = $request->file('feat_image');
        $tour->price = $request->input('price');
        
        if ($request->hasFile('feat_image')) {
            $newName = rand(). '.' .$image->getClientOriginalExtension();
            $directory = '/uploads/images/tours/';
            $image->move(public_path().$directory, $newName);
            $path = 'uploads/images/tours/' . $newName;
            $tour->feat_image = $path;

            $tour->save();
            return json_encode(['message'=> 'Tour created successfully', 'status'=> 200]);
        } else {
            return json_encode(['message'=> 'Tour not created', 'status'=> 400]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function show(tour $tour)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function edit(tour $tour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, tour $tour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function destroy(tour $tour)
    {
        //
    }
}
