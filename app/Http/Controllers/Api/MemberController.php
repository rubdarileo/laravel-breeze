<?php

namespace App\Http\Controllers\Api;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Exception;
use App\Models\Memberdata;
use App\Http\Controllers\Controller;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $membersdata = memberdata::all();

        return response()->json([
            'status'    => true,
            'code'      => Response::HTTP_OK,
            'membersdata'  => $membersdata,
            'message'   => __('Memberdata updated successfully'),
        ],  Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  Memberdata  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Memberdata $memberdata)
    {
        return response()->json([
            'status'    => true,
            'code'      => Response::HTTP_OK,
            'memberdata'  => $memberdata->resource,
            'message'   => __('Memberdata updated successfully'),
        ],  Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $data = $request->all();
            
            $memberdata = Memberdata::create([
                "firstname" => $data["firstname"],
                "lastname" => $data["lastname"],
                "middleinitial" => $data["middleinitial"],
                "ssnumber" => $data["ssnumber"],
                "hris" => $data["hris"],
                "home_phone" => $data["home_phone"],
                "cell_phone" => $data["cell_phone"],
                "birth_date" => $data["birth_date"],
                "email" => $data["email"],
                "iaffmembernumber" => $data["iaffmembernumber"],
                "web_active" => $data["web_active"],
                "suffix" => $data["suffix"],
                "iaff" => $data["iaff"],
                "uniaff" => $data["uniaff"],
                "retire_date" => $data["retire_date"],
                "erased" => $data["erased"],
                "join_date" => $data["join_date"],
                "rdray" => $data["rdray"],
                "department" => $data["department"],
                "unit" => $data["unit"],
                "title_id" => $data["title_id"],
                "gender_id" => $data["gender_id"],
                "sick_plan_id" => $data["sick_plan_id"],
                "ethnicity_id" => $data["ethnicity_id"]
            ]);

            return response()->json([
                'status'    => true,
                'code'      => Response::HTTP_OK,
                'memberdata'  => $memberdata->resource,
                'message'   => __('Memberdata created successfully'),
            ],  Response::HTTP_OK);

        } catch (Exception $e) {
            return response()->json([
                'status'    => false,
                'code'      => $e->getCode(),
                'message'   => $e->getMessage(),
            ], Response::HTTP_NOT_FOUND);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     * @param  Integer  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $data = $request->all();
            
            $memberdata = Memberdata::find($id);
            if($memberdata){
                $memberdata->firstname = $data["firstname"];
                $memberdata->lastname = $data["lastname"];
                $memberdata->middleinitial = $data["middleinitial"];
                $memberdata->ssnumber = $data["ssnumber"];
                $memberdata->hris = $data["hris"];
                $memberdata->home_phone = $data["home_phone"];
                $memberdata->cell_phone = $data["cell_phone"];
                $memberdata->birth_date = $data["birth_date"];
                $memberdata->email = $data["email"];
                $memberdata->iaffmembernumber = $data["iaffmembernumber"];
                $memberdata->web_active = $data["web_active"];
                $memberdata->suffix = $data["suffix"];
                $memberdata->iaff = $data["iaff"];
                $memberdata->uniaff = $data["uniaff"];
                $memberdata->retire_date = $data["retire_date"];
                $memberdata->erased = $data["erased"];
                $memberdata->join_date = $data["join_date"];
                $memberdata->rdray = $data["rdray"];
                $memberdata->department = $data["department"];
                $memberdata->unit = $data["unit"];
                $memberdata->title_id = $data["title_id"];
                $memberdata->gender_id = $data["gender_id"];
                $memberdata->sick_plan_id = $data["sick_plan_id"];
                $memberdata->ethnicity_id = $data["ethnicity_id"];
                $memberdata->save();
            }
            
            
            return response()->json([
                'status'    => true,
                'code'      => Response::HTTP_OK,
                'memberdata'  => $memberdata->resource,
                'message'   => __('Memberdata updated successfully'),
            ],  Response::HTTP_OK);

        } catch (Exception $e) {
            return response()->json([
                'status'    => false,
                'code'      => $e->getCode(),
                'message'   => $e->getMessage(),
            ], Response::HTTP_NOT_FOUND);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Request $request
     * @param  Integer $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        try {

            $data = $request->all();
            $memberdata = Memberdata::find($id);
            if($memberdata){
                $memberdata->delete();
            }

            return response()->json([
                'status'    => true,
                'code'      => Response::HTTP_OK,
                'message'   => __('Memberdata delete successfully'),
            ],  Response::HTTP_OK);

        } catch (Exception $e) {
            return response()->json([
                'status'    => false,
                'code'      => $e->getCode(),
                'message'   => $e->getMessage(),
            ], Response::HTTP_NOT_FOUND);
        }
    }
}