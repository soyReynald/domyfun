<?php

namespace App\Http\Controllers;

use App\Models\hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return hotel::paginate();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        $hotel = new hotel();
        $hotel->title = $request->input('title');
        $hotel->description = $request->input('description');

        $image = $request->file('feat_image');
        $hotel->price = $request->input('price');
        $hotel->zone = $request->input('zone');
        
        if ($request->hasFile('feat_image')) {
            $newName = rand(). '.' .$image->getClientOriginalExtension();
            $directory = '/uploads/images/';
            $image->move(public_path().$directory, $newName);
            $path = 'uploads/images/' . $newName;
            $hotel->feat_image = $path;

            $hotel->save();
            return json_encode(['message'=> 'Hotel created successfully', 'status'=> 200]);
        } else {
            return json_encode(['message'=> 'Hotel not created', 'status'=> 400]);
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
     * @param  \App\Models\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return hotel::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit(hotel $hotel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, hotel $hotel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(hotel $hotel)
    {
        //
    }
}
