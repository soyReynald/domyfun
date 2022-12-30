<?php

namespace App\Http\Controllers;

use App\Models\gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class GalleryController extends Controller
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
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            $imageName = '';

            $whatisThis = "";
            if ($request->hotel_id !== '' && $request->hotel_id !== null) {
                $pivot_id = DB::table('hotels')->latest()->first()->id; 
                $whatIsThis = "hotel";
            } else {
                $pivot_id = DB::table('tours')->latest()->first()->id; 
                $whatIsThis = "tour";
            }
            
            
            foreach ($images as $image) {
                $gallery = new gallery();
                
                if ($whatIsThis === "hotel") {
                    $gallery->hotel_id = $pivot_id; // The assignation in the variable is changing
                } else {
                    $gallery->tour_id = $pivot_id; // The assignation in the variable is changing
                }

                $newName = rand() . '.' . $image->getClientOriginalExtension();
                $directory = '/uploads/images/gallery/';
                $image->move(public_path().$directory, $newName);
                $path = 'uploads/images/gallery/' . $newName;
                $gallery->image = $path;
                
                $gallery->save();
                $imageName = $imageName.$newName. ', '; 
            }
            $imageDB = $imageName;
            return response()->json($imageDB);
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
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show($propertyID)
    {
        //
        $images = Gallery::select("*")
                        ->where("property_id", "=", $propertyID)
                        ->get();
                        
        return response()->json($images);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}
