Search.setIndex({docnames:["flow360","flow360doc/cli","flow360doc/cloud","flow360doc/component/flow360_params","flow360doc/component/meshing","flow360doc/components","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["flow360.rst","flow360doc/cli.rst","flow360doc/cloud.rst","flow360doc/component/flow360_params.rst","flow360doc/component/meshing.rst","flow360doc/components.rst","index.rst"],objects:{"":[[0,0,0,"-","flow360"]],"flow360.cli":[[1,0,0,"-","app"]],"flow360.cli.app":[[1,1,1,"","configure"],[1,1,1,"","flow360"]],"flow360.cloud":[[2,0,0,"-","http_util"],[2,0,0,"-","requests"],[2,0,0,"-","rest_api"],[2,0,0,"-","s3_utils"],[2,0,0,"-","security"]],"flow360.cloud.http_util":[[2,2,1,"","Http"],[2,1,1,"","api_key_auth"],[2,1,1,"","http_interceptor"]],"flow360.cloud.http_util.Http":[[2,3,1,"","delete"],[2,3,1,"","get"],[2,3,1,"","post"],[2,3,1,"","put"]],"flow360.cloud.requests":[[2,2,1,"","NewVolumeMeshRequest"]],"flow360.cloud.requests.NewVolumeMeshRequest":[[2,2,1,"","Config"],[2,4,1,"","compression"],[2,3,1,"","dict"],[2,4,1,"","endianness"],[2,4,1,"","file_name"],[2,4,1,"","format"],[2,4,1,"","mesh_params"],[2,4,1,"","name"],[2,3,1,"","set_mesh_params"],[2,4,1,"","solver_version"],[2,4,1,"","tags"]],"flow360.cloud.requests.NewVolumeMeshRequest.Config":[[2,4,1,"","allow_population_by_field_name"]],"flow360.cloud.rest_api":[[2,2,1,"","RestApi"]],"flow360.cloud.rest_api.RestApi":[[2,3,1,"","delete"],[2,3,1,"","get"],[2,3,1,"","post"],[2,3,1,"","put"]],"flow360.cloud.s3_utils":[[2,2,1,"","ProgressCallbackInterface"],[2,2,1,"","S3TransferType"],[2,1,1,"","create_base_folder"]],"flow360.cloud.s3_utils.ProgressCallbackInterface":[[2,3,1,"","total"]],"flow360.cloud.s3_utils.S3TransferType":[[2,4,1,"","CASE"],[2,4,1,"","SURFACE_MESH"],[2,4,1,"","VOLUME_MESH"],[2,3,1,"","download_file"],[2,3,1,"","upload_file"]],"flow360.cloud.security":[[2,1,1,"","api_key"]],"flow360.component":[[5,0,0,"-","case"],[5,0,0,"-","constants"],[3,0,0,"-","flow360_params"],[5,0,0,"-","interfaces"],[4,0,0,"-","meshing"],[5,0,0,"-","resource_base"],[5,0,0,"-","surface_mesh"],[5,0,0,"-","types"],[5,0,0,"-","utils"],[5,0,0,"-","validator"],[5,0,0,"-","volume_mesh"]],"flow360.component.case":[[5,2,1,"","CacheableData"],[5,2,1,"","Case"],[5,2,1,"","CaseBase"],[5,2,1,"","CaseDownloadable"],[5,2,1,"","CaseDraft"],[5,2,1,"","CaseList"],[5,2,1,"","CaseMeta"],[5,2,1,"","CaseResultType"],[5,2,1,"","CaseResults"],[5,2,1,"","ResultsPloter"]],"flow360.component.case.CacheableData":[[5,3,1,"","get"],[5,3,1,"","plot"],[5,5,1,"","raw"],[5,3,1,"","to_csv"]],"flow360.component.case.Case":[[5,3,1,"","create"],[5,3,1,"","download_log"],[5,3,1,"","from_cloud"],[5,3,1,"","has_actuator_disks"],[5,3,1,"","has_bet_disks"],[5,3,1,"","has_parent"],[5,5,1,"","info"],[5,3,1,"","is_finished"],[5,3,1,"","is_steady"],[5,5,1,"","params"],[5,5,1,"","params_as_dict"],[5,5,1,"","parent"],[5,5,1,"","results"],[5,5,1,"","volume_mesh_id"]],"flow360.component.case.CaseBase":[[5,3,1,"","continuation"],[5,3,1,"","copy"],[5,3,1,"","fork"],[5,3,1,"","retry"]],"flow360.component.case.CaseDownloadable":[[5,4,1,"","ACTUATOR_DISK_OUTPUT"],[5,4,1,"","BET_FORCES"],[5,4,1,"","CFL"],[5,4,1,"","LINEAR_RESIDUALS"],[5,4,1,"","MINMAX_STATE"],[5,4,1,"","NONLINEAR_RESIDUALS"],[5,4,1,"","SURFACE"],[5,4,1,"","SURFACE_FORCES"],[5,4,1,"","TOTAL_FORCES"],[5,4,1,"","VOLUME"]],"flow360.component.case.CaseDraft":[[5,5,1,"","name"],[5,5,1,"","params"],[5,3,1,"","submit"],[5,3,1,"","to_case"],[5,3,1,"","validate_case_inputs"],[5,3,1,"","validator_api"],[5,5,1,"","volume_mesh_id"]],"flow360.component.case.CaseList":[[5,3,1,"","filter"]],"flow360.component.case.CaseMeta":[[5,4,1,"","case_mesh_id"],[5,4,1,"","id"],[5,4,1,"","parent_id"],[5,3,1,"","set_status_type"],[5,4,1,"","status"],[5,3,1,"","to_case"]],"flow360.component.case.CaseResultType":[[5,4,1,"","CFL"],[5,4,1,"","LINEAR_RESIDUALS"],[5,4,1,"","MINMAX_STATE"],[5,4,1,"","NONLINEAR_RESIDUALS"],[5,4,1,"","TOTAL_FORCES"]],"flow360.component.case.CaseResults":[[5,5,1,"","cfl"],[5,3,1,"","download_file"],[5,3,1,"","download_manager"],[5,3,1,"","download_surface"],[5,3,1,"","download_volumetric"],[5,3,1,"","get_cfl"],[5,3,1,"","get_linear_residuals"],[5,3,1,"","get_minmax_state"],[5,3,1,"","get_residuals"],[5,3,1,"","get_total_forces"],[5,5,1,"","linear_residuals"],[5,5,1,"","minmax_state"],[5,5,1,"","plot"],[5,5,1,"","residuals"],[5,5,1,"","total_forces"]],"flow360.component.case.ResultsPloter":[[5,3,1,"","residuals"],[5,3,1,"","total_forces"]],"flow360.component.constants":[[5,2,1,"","constants"]],"flow360.component.constants.constants":[[5,4,1,"","R"]],"flow360.component.flow360_params":[[3,0,0,"-","flow360_params"],[3,0,0,"-","params_base"],[3,0,0,"-","solvers"]],"flow360.component.flow360_params.flow360_params":[[3,2,1,"","Boundary"],[3,2,1,"","Flow360MeshParams"],[3,2,1,"","Flow360Params"],[3,2,1,"","Freestream"],[3,2,1,"","FreestreamBoundary"],[3,2,1,"","Geometry"],[3,2,1,"","IsothermalWall"],[3,2,1,"","MassInflow"],[3,2,1,"","MassOutflow"],[3,2,1,"","MeshBoundary"],[3,2,1,"","MeshSlidingInterface"],[3,2,1,"","NoSlipWall"],[3,2,1,"","SlidingInterfaceBoundary"],[3,2,1,"","SlipWall"],[3,2,1,"","SubsonicInflow"],[3,2,1,"","SubsonicOutflowMach"],[3,2,1,"","SubsonicOutflowPressure"],[3,2,1,"","TimeStepping"],[3,2,1,"","TimeSteppingCFL"],[3,2,1,"","UnvalidatedFlow360Params"],[3,2,1,"","WallFunction"],[3,1,1,"","get_length_non_dim_unit"],[3,1,1,"","get_time_non_dim_unit"]],"flow360.component.flow360_params.flow360_params.Boundary":[[3,4,1,"","name"],[3,4,1,"","type"]],"flow360.component.flow360_params.flow360_params.Flow360MeshParams":[[3,4,1,"","boundaries"],[3,4,1,"","sliding_interfaces"]],"flow360.component.flow360_params.flow360_params.Flow360Params":[[3,4,1,"","actuator_disks"],[3,4,1,"","bet_disks"],[3,4,1,"","boundaries"],[3,3,1,"","default"],[3,4,1,"","freestream"],[3,4,1,"","geometry"],[3,4,1,"","initial_condition"],[3,4,1,"","iso_surface_output"],[3,4,1,"","monitor_output"],[3,4,1,"","navier_stokes_solver"],[3,4,1,"","porous_media"],[3,4,1,"","slice_output"],[3,4,1,"","sliding_interfaces"],[3,4,1,"","surface_output"],[3,4,1,"","time_stepping"],[3,3,1,"","to_flow360_json"],[3,4,1,"","transition_model_solver"],[3,4,1,"","turbulence_model_solver"],[3,4,1,"","user_defined_dynamics"],[3,4,1,"","volume_output"]],"flow360.component.flow360_params.flow360_params.Freestream":[[3,4,1,"","Mach"],[3,4,1,"","MachRef"],[3,4,1,"","Reynolds"],[3,4,1,"","alpha"],[3,4,1,"","beta"],[3,4,1,"","density"],[3,3,1,"","from_speed"],[3,3,1,"","get_C_inf"],[3,4,1,"","mu_ref"],[3,4,1,"","speed"],[3,4,1,"","temperature"],[3,3,1,"","to_flow360_json"],[3,4,1,"","turbulent_viscosity_ratio"],[3,3,1,"","validate_speed"]],"flow360.component.flow360_params.flow360_params.FreestreamBoundary":[[3,4,1,"","velocity"]],"flow360.component.flow360_params.flow360_params.Geometry":[[3,3,1,"","get_mesh_unit_length"],[3,4,1,"","mesh_unit"],[3,4,1,"","mesh_unit_length"],[3,3,1,"","mesh_unit_length_in_meter"],[3,4,1,"","moment_center"],[3,4,1,"","moment_length"],[3,4,1,"","ref_area"]],"flow360.component.flow360_params.flow360_params.IsothermalWall":[[3,4,1,"","Temperature"],[3,4,1,"","velocity"]],"flow360.component.flow360_params.flow360_params.MassInflow":[[3,4,1,"","massFlowRate"]],"flow360.component.flow360_params.flow360_params.MassOutflow":[[3,4,1,"","massFlowRate"]],"flow360.component.flow360_params.flow360_params.MeshBoundary":[[3,4,1,"","no_slip_walls"]],"flow360.component.flow360_params.flow360_params.MeshSlidingInterface":[[3,4,1,"","axis"],[3,4,1,"","center"],[3,3,1,"","from_case_sliding_interface"],[3,4,1,"","rotating_patches"],[3,4,1,"","stationary_patches"]],"flow360.component.flow360_params.flow360_params.NoSlipWall":[[3,4,1,"","velocity"]],"flow360.component.flow360_params.flow360_params.SubsonicInflow":[[3,4,1,"","rampSteps"],[3,4,1,"","totalPressureRatio"],[3,4,1,"","totalTemperatureRatio"]],"flow360.component.flow360_params.flow360_params.SubsonicOutflowMach":[[3,4,1,"","Mach"]],"flow360.component.flow360_params.flow360_params.SubsonicOutflowPressure":[[3,4,1,"","staticPressureRatio"]],"flow360.component.flow360_params.flow360_params.TimeStepping":[[3,4,1,"","CFL"],[3,3,1,"","check_time_step_size"],[3,3,1,"","default_steady"],[3,3,1,"","default_unsteady"],[3,4,1,"","max_pseudo_steps"],[3,3,1,"","perform_non_dimensionalisation"],[3,4,1,"","physical_steps"],[3,4,1,"","time_step_size"],[3,3,1,"","to_flow360_json"]],"flow360.component.flow360_params.flow360_params.TimeSteppingCFL":[[3,3,1,"","adaptive"],[3,4,1,"","convergence_limiting_factor"],[3,3,1,"","default_steady"],[3,3,1,"","default_unsteady"],[3,4,1,"","final"],[3,4,1,"","initial"],[3,4,1,"","max"],[3,4,1,"","max_relative_change"],[3,4,1,"","min"],[3,4,1,"","ramp_steps"],[3,4,1,"","randomizer"],[3,4,1,"","type"]],"flow360.component.flow360_params.params_base":[[3,2,1,"","Flow360BaseModel"],[3,2,1,"","Flow360SortableBaseModel"],[3,1,1,"","export_to_flow360"],[3,1,1,"","json_dumps"],[3,1,1,"","params_generic_validator"]],"flow360.component.flow360_params.params_base.Flow360BaseModel":[[3,2,1,"","Config"],[3,3,1,"","add_type_field"],[3,3,1,"","allow_but_remove"],[3,3,1,"","append"],[3,4,1,"","comments"],[3,3,1,"","copy"],[3,3,1,"","dict"],[3,3,1,"","dict_from_file"],[3,3,1,"","dict_from_json"],[3,3,1,"","dict_from_yaml"],[3,3,1,"","from_file"],[3,3,1,"","from_json"],[3,3,1,"","from_yaml"],[3,3,1,"","generate_docstring"],[3,3,1,"","handle_depracated_aliases"],[3,3,1,"","help"],[3,3,1,"","json"],[3,3,1,"","one_of"],[3,3,1,"","to_file"],[3,3,1,"","to_flow360_json"],[3,3,1,"","to_json"],[3,3,1,"","to_yaml"]],"flow360.component.flow360_params.params_base.Flow360BaseModel.Config":[[3,4,1,"","allow_but_remove"],[3,4,1,"","allow_mutation"],[3,4,1,"","allow_population_by_field_name"],[3,4,1,"","arbitrary_types_allowed"],[3,4,1,"","copy_on_model_validation"],[3,4,1,"","deprecated_aliases"],[3,4,1,"","extra"],[3,4,1,"","json_encoders"],[3,4,1,"","require_one_of"],[3,4,1,"","underscore_attrs_are_private"],[3,4,1,"","validate_all"],[3,4,1,"","validate_assignment"],[3,4,1,"","will_export"]],"flow360.component.flow360_params.solvers":[[3,2,1,"","GenericSolverSettings"],[3,2,1,"","TurbulenceModelConstants"],[3,2,1,"","TurbulenceModelModelType"]],"flow360.component.flow360_params.solvers.GenericSolverSettings":[[3,4,1,"","absolute_tolerance"],[3,4,1,"","equation_eval_frequency"],[3,4,1,"","kappaMUSCL"],[3,4,1,"","linear_iterations"],[3,4,1,"","max_force_jac_update_physical_steps"],[3,4,1,"","order_of_accuracy"],[3,4,1,"","randomizer"],[3,4,1,"","relative_tolerance"],[3,4,1,"","update_jacobian_frequency"]],"flow360.component.flow360_params.solvers.TurbulenceModelConstants":[[3,4,1,"","C_DES"],[3,4,1,"","C_DES1"],[3,4,1,"","C_DES2"],[3,4,1,"","C_d"],[3,4,1,"","C_d1"],[3,4,1,"","C_d2"]],"flow360.component.flow360_params.solvers.TurbulenceModelModelType":[[3,4,1,"","NONE"],[3,4,1,"","SA"],[3,4,1,"","SST"]],"flow360.component.interfaces":[[5,2,1,"","BaseInterface"]],"flow360.component.interfaces.BaseInterface":[[5,4,1,"","endpoint"],[5,4,1,"","resource_type"],[5,4,1,"","s3_transfer_method"]],"flow360.component.meshing":[[4,0,0,"-","params"]],"flow360.component.meshing.params":[[4,2,1,"","Aniso"],[4,2,1,"","BoxRefinement"],[4,2,1,"","CylinderRefinement"],[4,2,1,"","Edges"],[4,2,1,"","Face"],[4,4,1,"","FaceType"],[4,2,1,"","Faces"],[4,2,1,"","Farfield"],[4,2,1,"","ProjectAniso"],[4,2,1,"","Refinement"],[4,2,1,"","RotationalModelBase"],[4,2,1,"","RotorDisk"],[4,2,1,"","SlidingInterface"],[4,2,1,"","SurfaceMeshingParams"],[4,2,1,"","UseAdjacent"],[4,2,1,"","Volume"],[4,2,1,"","VolumeMeshingParams"]],"flow360.component.meshing.params.Aniso":[[4,4,1,"","adapt"],[4,4,1,"","method"],[4,4,1,"","value"]],"flow360.component.meshing.params.BoxRefinement":[[4,4,1,"","angle_of_rotation"],[4,4,1,"","axis_of_rotation"],[4,4,1,"","size"]],"flow360.component.meshing.params.CylinderRefinement":[[4,4,1,"","axis"],[4,4,1,"","length"],[4,4,1,"","radius"]],"flow360.component.meshing.params.Edges":[[4,3,1,"","validate_edge"]],"flow360.component.meshing.params.Face":[[4,4,1,"","adapt"],[4,4,1,"","max_edge_length"]],"flow360.component.meshing.params.Faces":[[4,3,1,"","validate_face"]],"flow360.component.meshing.params.Farfield":[[4,4,1,"","type"]],"flow360.component.meshing.params.ProjectAniso":[[4,4,1,"","adapt"]],"flow360.component.meshing.params.Refinement":[[4,4,1,"","center"],[4,4,1,"","spacing"]],"flow360.component.meshing.params.RotationalModelBase":[[4,4,1,"","center"],[4,4,1,"","inner_radius"],[4,4,1,"","name"],[4,4,1,"","outer_radius"],[4,4,1,"","spacing_axial"],[4,4,1,"","spacing_circumferential"],[4,4,1,"","spacing_radial"],[4,4,1,"","thickness"]],"flow360.component.meshing.params.RotorDisk":[[4,4,1,"","axis_thrust"]],"flow360.component.meshing.params.SlidingInterface":[[4,4,1,"","axis_of_rotation"],[4,4,1,"","enclosed_objects"]],"flow360.component.meshing.params.SurfaceMeshingParams":[[4,4,1,"","curvature_resolution_angle"],[4,4,1,"","edges"],[4,4,1,"","faces"],[4,4,1,"","growth_rate"],[4,4,1,"","max_edge_length"]],"flow360.component.meshing.params.UseAdjacent":[[4,4,1,"","adapt"]],"flow360.component.meshing.params.Volume":[[4,4,1,"","first_layer_thickness"],[4,4,1,"","gap_treatment_strength"],[4,4,1,"","growth_rate"]],"flow360.component.meshing.params.VolumeMeshingParams":[[4,4,1,"","farfield"],[4,4,1,"","refinement"],[4,4,1,"","rotor_disks"],[4,4,1,"","sliding_interfaces"],[4,4,1,"","volume"]],"flow360.component.resource_base":[[5,2,1,"","Flow360Resource"],[5,2,1,"","Flow360ResourceBaseModel"],[5,2,1,"","Flow360ResourceListBase"],[5,2,1,"","Flow360Status"],[5,2,1,"","ResourceDraft"],[5,1,1,"","before_submit_only"],[5,1,1,"","is_object_cloud_resource"],[5,1,1,"","on_cloud_resource_only"]],"flow360.component.resource_base.Flow360Resource":[[5,3,1,"","download_file"],[5,3,1,"","get_download_file_list"],[5,3,1,"","get_info"],[5,5,1,"","id"],[5,5,1,"","info"],[5,3,1,"","is_cloud_resource"],[5,5,1,"","name"],[5,3,1,"","short_description"],[5,5,1,"","solver_version"],[5,5,1,"","status"],[5,3,1,"","upload_file"]],"flow360.component.resource_base.Flow360ResourceBaseModel":[[5,4,1,"","created_at"],[5,4,1,"","deleted"],[5,3,1,"","handle_none_str"],[5,4,1,"","id"],[5,4,1,"","name"],[5,4,1,"","solver_version"],[5,4,1,"","status"],[5,4,1,"","tags"],[5,4,1,"","updated_at"],[5,4,1,"","updated_by"],[5,4,1,"","user_id"]],"flow360.component.resource_base.Flow360ResourceListBase":[[5,3,1,"","from_cloud"]],"flow360.component.resource_base.Flow360Status":[[5,4,1,"","CASE_UPLOADED"],[5,4,1,"","COMPLETED"],[5,4,1,"","DELETED"],[5,4,1,"","DIVERGED"],[5,4,1,"","ERROR"],[5,4,1,"","GENERATING"],[5,4,1,"","PENDING"],[5,4,1,"","PREPROCESSING"],[5,4,1,"","PROCESSED"],[5,4,1,"","RUNNING"],[5,4,1,"","STOPPED"],[5,4,1,"","UNKNOWN"],[5,4,1,"","UPLOADED"],[5,4,1,"","UPLOADING"],[5,3,1,"","is_final"]],"flow360.component.resource_base.ResourceDraft":[[5,5,1,"","id"],[5,3,1,"","is_cloud_resource"]],"flow360.component.surface_mesh":[[5,2,1,"","SurfaceMesh"],[5,2,1,"","SurfaceMeshDownloadable"],[5,2,1,"","SurfaceMeshDraft"],[5,2,1,"","SurfaceMeshList"],[5,2,1,"","SurfaceMeshMeta"]],"flow360.component.surface_mesh.SurfaceMesh":[[5,3,1,"","create"],[5,3,1,"","create_volume_mesh"],[5,3,1,"","download_log"],[5,3,1,"","from_cloud"],[5,5,1,"","params"]],"flow360.component.surface_mesh.SurfaceMeshDownloadable":[[5,4,1,"","CONFIG_JSON"]],"flow360.component.surface_mesh.SurfaceMeshDraft":[[5,5,1,"","geometry_file"],[5,3,1,"","submit"],[5,3,1,"","validator_api"]],"flow360.component.surface_mesh.SurfaceMeshMeta":[[5,3,1,"","init_params"],[5,4,1,"","params"],[5,3,1,"","to_surface_mesh"]],"flow360.component.types":[[5,2,1,"","Axis"],[5,2,1,"","DimensionedValue"],[5,2,1,"","Omega"],[5,2,1,"","TimeStep"],[5,2,1,"","Vector"],[5,2,1,"","Velocity"],[5,1,1,"","annotate_type"]],"flow360.component.types.DimensionedValue":[[5,4,1,"","unit"],[5,4,1,"","v"]],"flow360.component.types.Omega":[[5,4,1,"","unit"]],"flow360.component.types.TimeStep":[[5,3,1,"","is_second"],[5,4,1,"","unit"],[5,4,1,"","v"]],"flow360.component.types.Vector":[[5,3,1,"","validate"]],"flow360.component.types.Velocity":[[5,4,1,"","unit"]],"flow360.component.utils":[[5,1,1,"","beta_feature"],[5,1,1,"","is_valid_uuid"],[5,1,1,"","validate_type"]],"flow360.component.validator":[[5,2,1,"","Validator"]],"flow360.component.validator.Validator":[[5,4,1,"","CASE"],[5,4,1,"","SURFACE_MESH"],[5,4,1,"","VOLUME_MESH"],[5,3,1,"","validate"]],"flow360.component.volume_mesh":[[5,2,1,"","CompressionFormat"],[5,2,1,"","UGRIDEndianness"],[5,2,1,"","VolumeMesh"],[5,2,1,"","VolumeMeshDownloadable"],[5,2,1,"","VolumeMeshDraft"],[5,2,1,"","VolumeMeshFileFormat"],[5,2,1,"","VolumeMeshList"],[5,2,1,"","VolumeMeshLog"],[5,2,1,"","VolumeMeshMeta"],[5,1,1,"","get_boundaries_from_file"],[5,1,1,"","get_boundries_from_sliding_interfaces"],[5,1,1,"","get_datatype"],[5,1,1,"","get_no_slip_walls"],[5,1,1,"","validate_cgns"]],"flow360.component.volume_mesh.CompressionFormat":[[5,4,1,"","BZ2"],[5,4,1,"","GZ"],[5,4,1,"","NONE"],[5,3,1,"","detect"],[5,3,1,"","ext"]],"flow360.component.volume_mesh.UGRIDEndianness":[[5,4,1,"","BIG"],[5,4,1,"","LITTLE"],[5,4,1,"","NONE"],[5,3,1,"","detect"],[5,3,1,"","ext"]],"flow360.component.volume_mesh.VolumeMesh":[[5,5,1,"","all_boundaries"],[5,3,1,"","create"],[5,3,1,"","create_case"],[5,3,1,"","download"],[5,3,1,"","download_file"],[5,3,1,"","download_log"],[5,3,1,"","from_cloud"],[5,3,1,"","from_file"],[5,5,1,"","no_slip_walls"]],"flow360.component.volume_mesh.VolumeMeshDownloadable":[[5,4,1,"","CONFIG_JSON"]],"flow360.component.volume_mesh.VolumeMeshDraft":[[5,3,1,"","submit"],[5,3,1,"","validator_api"]],"flow360.component.volume_mesh.VolumeMeshFileFormat":[[5,4,1,"","CGNS"],[5,4,1,"","UGRID"],[5,3,1,"","detect"],[5,3,1,"","ext"]],"flow360.component.volume_mesh.VolumeMeshList":[[5,3,1,"","filter"]],"flow360.component.volume_mesh.VolumeMeshLog":[[5,4,1,"","PY_LOG"],[5,4,1,"","USER_LOG"]],"flow360.component.volume_mesh.VolumeMeshMeta":[[5,4,1,"","boundaries"],[5,4,1,"","compression"],[5,4,1,"","created_at"],[5,4,1,"","endianness"],[5,4,1,"","file_name"],[5,4,1,"","id"],[5,3,1,"","init_compression"],[5,3,1,"","init_endianness"],[5,3,1,"","init_mesh_params"],[5,4,1,"","mesh_format"],[5,4,1,"","mesh_params"],[5,4,1,"","name"],[5,4,1,"","surface_mesh_id"],[5,3,1,"","to_volume_mesh"]],"flow360.environment":[[0,2,1,"","Environment"],[0,2,1,"","EnvironmentConfig"]],"flow360.environment.Environment":[[0,5,1,"","current"],[0,5,1,"","dev"],[0,5,1,"","impersonate"],[0,5,1,"","prod"],[0,3,1,"","set_current"],[0,5,1,"","uat"]],"flow360.environment.EnvironmentConfig":[[0,3,1,"","active"],[0,3,1,"","get_real_url"]],"flow360.exceptions":[[0,6,1,"","AuthenticationError"],[0,6,1,"","AuthorisationError"],[0,6,1,"","CloudFileError"],[0,6,1,"","ConfigError"],[0,6,1,"","DataError"],[0,6,1,"","FileError"],[0,6,1,"","Flow360Error"],[0,6,1,"","Flow360ImportError"],[0,6,1,"","Flow360KeyError"],[0,6,1,"","Flow360NotImplementedError"],[0,6,1,"","RuntimeError"],[0,6,1,"","TypeError"],[0,6,1,"","ValidationError"],[0,6,1,"","ValueError"],[0,6,1,"","WebError"],[0,6,1,"","WebNotFoundError"]],flow360:[[1,0,0,"-","cli"],[2,0,0,"-","cloud"],[5,0,0,"-","component"],[0,0,0,"-","environment"],[0,0,0,"-","error_messages"],[0,0,0,"-","exceptions"],[0,2,1,"","turbulence"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","property","Python property"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:property","6":"py:exception"},terms:{"0":[3,4,5],"0529":5,"1":[3,4,5],"10":3,"100":[3,5],"15":[3,4],"2":[3,4],"200":2,"225":3,"287":5,"288":3,"3d":4,"abstract":[2,5],"byte":2,"case":[2,3,6],"class":[0,2,3,4,5],"default":[3,5],"enum":[2,3,5],"export":3,"final":[3,5],"float":[3,4,5],"function":[0,2,3,5],"import":0,"int":[2,3,5],"new":[2,5],"return":[0,2,3,4,5],"short":5,"true":[2,3,5],A:3,For:[0,3],If:[2,3,5],No:3,With:3,__doc__:3,_description_:5,_type:[3,4],abc:[2,3,5],about:3,absolute_toler:3,absolutetoler:3,access:0,activ:0,actuat:5,actuator_disk:3,actuator_disk_output:5,actuatordisk:3,actuatordisk_output_v2:5,adapt:[3,4],add_type_field:3,aflr3:[2,5],after:5,alia:[4,5],alias:3,all:[3,5],all_boundari:5,allow_but_remov:3,allow_inf_nan:3,allow_mut:3,allow_non:5,allow_population_by_field_nam:[2,3],alpha:3,alphaangl:3,also:3,an:[2,3,4],ancestor_id:5,angl:4,angle_of_rot:4,angleofrot:4,ani:[0,1,3,4,5],aniso:4,annot:5,annotate_typ:5,api:[2,5],api_kei:2,api_key_auth:2,apikey_profil:0,app:6,append:3,ar:[3,5],arbitrary_types_allow:3,arg:[1,2,3],argument:3,aspectratio:4,associ:5,assum:3,authent:[0,2],authenticationerror:0,authorisationerror:0,auto:4,automat:3,avail:5,aws_region:0,axi:[3,4,5],axis_of_rot:4,axis_thrust:4,axisofrot:[3,4],axisthrust:4,bar:5,base:[0,2,3,4,6],baseinterfac:5,basemodel:[0,2,3,5],basic:[0,3,5],befor:5,before_submit_onli:5,bet:5,bet_disk:3,bet_forc:5,bet_forces_v2:5,beta:[3,5],beta_featur:5,betaangl:3,betdisk:3,big:[2,5],bool:[2,3,4,5],boundari:[3,5],boundaryvelocitytyp:3,box:4,boxrefin:4,by_alia:3,bz2:[2,5],c_d1:3,c_d2:3,c_d:3,c_de:3,c_des1:3,c_des2:3,c_inf:3,cach:5,cacheabl:5,cacheabledata:5,call:3,callback:[2,5],can:5,case_id:5,case_mesh_id:5,case_upload:5,casebas:5,casedownload:5,casedraft:5,caseid:5,caselist:5,casemeshid:5,casemeta:5,caseresult:5,caseresulttyp:5,center:[3,4],centerofrot:3,cfl:[3,5],cfl_v2:5,cgn:[2,5],cgns_file:5,check:5,check_time_step_s:3,classmethod:[2,3,4,5],cli:1,client:2,cloud:[0,5,6],cloudfileerror:0,cm:3,code:2,collect:5,com:3,commandlin:6,comment:[3,4],complet:5,compon:[0,2,3,4,6],compress:[2,5],compressionformat:5,config:[0,2,3,5],config_json:5,configerror:0,configur:[0,1,3],confloat:3,constant:6,constrain:4,constrainedfloatvalu:[3,4],construct:0,contain:3,content:6,continu:5,convergence_limiting_factor:3,convergencelimitingfactor:3,coordin:3,copi:[3,5],copy_on_model_valid:3,core:4,correct:[3,5],could:[0,2,5],creat:[2,3,5],create_base_fold:2,create_cas:5,create_volume_mesh:5,created_at:5,createdat:5,csv:5,current:[0,2],curvature_resolution_angl:4,curvatureresolutionangl:4,custom:[0,2,3,5],cylind:4,cylinderrefin:4,data:[0,3,5],dataerror:0,dataset:5,datatyp:5,datetim:5,decor:0,deep:3,default_steadi:3,default_unsteadi:3,defin:[3,5],definit:[0,5],deg:5,delet:[2,5],densiti:[3,5],deprec:3,deprecated_alias:3,deprecatedalia:3,describ:3,descript:5,detail:3,detect:5,dev:0,dict:[2,3,5],dict_from_fil:3,dict_from_json:3,dict_from_yaml:3,dictionari:[0,3,5],dim:5,dimensionalis:3,dimensionedvalu:5,discrimin:5,disk:5,diverg:5,docstr:3,doe:5,don:2,download:[2,5],download_fil:[2,5],download_log:5,download_manag:5,download_surfac:5,download_volumetr:5,draft:5,dump:3,e:[3,5],edg:4,edge_nam:4,edgetyp:4,eg:[0,3],either:[2,3,5],enclosed_object:4,enclosedobject:4,endia:5,endian:[2,5],endpoint:[2,5],entrypoint:1,env:0,environ:[2,6],environmentconfig:0,equation_eval_frequ:3,equationevalfrequ:3,error:[0,5],error_messag:6,exampl:[0,2,3,4,5],except:[2,6],exclud:3,exclude_non:3,exist:[2,3,5],expect:[3,5],expected_typ:5,expectedparamstyp:3,export_to_flow360:3,ext:5,extent:5,extra:3,extra_data:5,extra_msg:3,face:4,face_nam:4,facetyp:4,fail:5,fals:[3,5],farfield:4,featur:5,feature_nam:5,feet:3,fetch:5,field:[3,5],file:[0,2,3,5],file_nam:[2,5],fileerror:0,filenam:[2,3,4,5],filter:5,find:0,first_layer_thick:4,firstlayerthick:4,fliter:5,flow360:[1,2,5],flow360_param:[2,3,4,5],flow360basemodel:[3,4],flow360error:0,flow360importerror:0,flow360keyerror:0,flow360mesh:3,flow360meshparam:[2,3,5],flow360notimplementederror:0,flow360param:[3,5],flow360resourc:5,flow360resourcebasemodel:5,flow360resourcelistbas:5,flow360sortablebasemodel:[3,4],flow360statu:5,folder:[2,3,5],forbid:3,forc:5,force_submit:5,fork:5,format:[2,3,5],freestream:3,freestreamboundari:3,from:[0,2,3,5],from_case_sliding_interfac:3,from_cloud:5,from_fil:[3,5],from_json:3,from_spe:3,from_yaml:3,fs:3,full:3,func:[2,3,5],g:3,gap_treatment_strength:4,gaptreatmentstrength:4,ge:3,gener:[3,5],generate_docstr:3,genericsolverset:3,geometri:[3,5],geometry_fil:5,get:[0,2,5],get_boundaries_from_fil:5,get_boundries_from_sliding_interfac:5,get_c_inf:3,get_cfl:5,get_datatyp:5,get_download_file_list:5,get_info:5,get_length_non_dim_unit:3,get_linear_residu:5,get_mesh_unit_length:3,get_method:5,get_minmax_st:5,get_no_slip_wal:5,get_real_url:0,get_residu:5,get_time_non_dim_unit:3,get_total_forc:5,growth_rat:4,growthrat:4,gt:3,gz:[2,5],ha:5,handl:[3,5],handle_depracated_alias:3,handle_none_str:5,has_actuator_disk:5,has_bet_disk:5,has_par:5,hash:3,have:5,height:4,help:3,http:6,http_interceptor:2,http_util:2,i:5,id:[2,5],ignor:5,imperson:0,implement:5,impor:3,inch:3,include_delet:5,incorrect:4,index:6,inf:3,info:5,info_type_class:5,inform:3,inherit:3,init_compress:5,init_endian:5,init_mesh_param:5,init_param:5,initi:3,initial_condit:3,initialcondit:3,inner_radiu:4,innerradiu:4,input:5,instanc:[3,4],interact:0,intercept:2,interfac:[1,3,6],is_cloud_resourc:5,is_fin:5,is_finish:5,is_object_cloud_resourc:5,is_second:5,is_steadi:5,is_valid_uuid:5,isascii:5,iso_surface_output:3,isosurfaceoutput:3,isothermalwal:3,iter:5,json:[2,3,5],json_dump:3,json_encod:3,kappamuscl:3,keep_fold:[2,5],kei:[0,2,3],keyword:3,komegasst:3,kwarg:[1,2,3,4,5],lambda:3,le:3,legaci:3,length:[3,4],limit:5,linear:5,linear_iter:3,linear_residu:5,linear_residual_v2:5,lineariter:3,list:[2,3,4,5],liter:[2,3,4,5],littl:[2,5],load:3,local:[2,5],log:5,log_error:2,log_fil:5,longer:3,m:[3,5],mach:3,machnumb:3,machref:3,magnitud:5,main:[0,2,3,5],manag:5,mani:5,map:3,massflowr:3,massinflow:3,massoutflow:3,materi:2,max:[3,5],max_edge_lengt:4,max_edge_length:4,max_force_jac_update_physical_step:3,max_pseudo_step:3,max_relative_chang:3,maxedgelength:4,maxforcejacupdatephysicalstep:3,maxpseudostep:3,maxrelativechang:3,memori:5,mesh:[2,3,6],mesh_format:5,mesh_id:5,mesh_param:[2,5],mesh_unit:3,mesh_unit_length:3,mesh_unit_length_in_met:3,meshaddtim:5,meshboundari:3,meshcompress:[2,5],meshendian:[2,5],meshformat:[2,5],meshid:5,meshnam:[2,5],meshparam:[2,5],meshslidinginterfac:3,meshtag:2,meshunit:3,meshunitlength:3,messag:[0,3,5],meta:5,metadata:5,meter:3,method:[2,3,4],min:[3,5],minmax_st:5,minmax_state_v2:5,mm:3,model:[0,3,5],modul:6,moment_cent:3,moment_length:3,momentcent:3,momentlength:3,momentlengthtyp:3,monitor_output:3,monitoroutput:3,more:3,mu_ref:3,muref:3,must:5,name:[0,2,3,4,5],navier_stokes_solv:3,navierstokessolv:3,ndarrai:3,need:[0,3],newvolumemeshrequest:2,no_slip_wal:[3,5],non:[3,5],none:[0,2,3,4,5],nonetyp:3,nonlinear_residu:5,nonlinear_residual_v2:5,nonnegativefloat:[3,4],nonnegativeint:3,noslipwal:3,numpi:3,object:[0,2,3,5],omega:5,on_cloud_resource_onli:5,onc:5,one:3,one_of:3,onli:[2,5],option:[0,2,3,4,5],order_of_accuraci:3,orderofaccuraci:3,other_cas:5,otherwis:[2,5],out:3,outer_radiu:4,outerradiu:4,overwrit:[2,3,5],packag:6,page:6,param:[0,2,3,4,5],paramet:[2,5,6],parameter_nam:5,parametr:3,params_as_dict:5,params_bas:[3,4],params_dict:3,params_generic_valid:3,paremet:5,parent:5,parent_cas:5,parent_id:5,parentid:5,parse_obj:3,parse_obj_kwarg:3,particular:0,pass:3,path:[0,2,3,5],pd:3,pend:5,per:3,perform:3,perform_non_dimensionalis:3,physic:5,physical_step:3,physicalstep:3,place:3,plot:5,plotter:5,porous_media:3,porousmedia:3,positivefloat:[3,4,5],positiveint:3,post:2,postprocess:5,pre_submit_check:5,preprocess:5,pressur:5,print:[3,5],process:5,prod:0,progress:[2,5],progress_callback:[2,5],progresscallbackinterfac:2,projectaniso:4,projectanisospac:4,properti:[0,3,5],provid:[2,3],put:[2,5],py:5,py_log:5,pydant:[0,2,3,4,5],quasi:4,quot:3,r:5,rad:5,radiu:4,rais:[2,4,5],raise_on_error:5,ramp:3,ramp_step:3,rampstep:3,random:3,raw:5,read:0,real:0,ref_area:3,refarea:3,refin:4,relat:2,relative_toler:3,relativetoler:3,remote_file_nam:[2,5],represent:[2,3,5],request:6,requir:3,require_one_of:3,residu:5,resourc:[2,6],resource_bas:5,resource_id:2,resource_typ:5,resourceclass:5,resourcedraft:5,resourcelist:5,respons:2,rest_api:[2,5],restapi:[5,6],result:5,resultsplot:5,retri:5,return_json:3,reynold:3,root:3,rotating_patch:3,rotatingpatch:3,rotationalmodelbas:4,rotor_disk:4,rotordisk:4,run:5,runtim:0,runtimeerror:[0,5],s3:2,s3_transfer_method:5,s3_util:[5,6],s3transfertyp:[2,5],s:[3,5],sa:[0,3],same:[2,5],save:[3,5],search:6,sec:5,second:[3,5],section:4,secur:6,see:3,self:5,server:5,session:2,set:[0,2,3,4],set_curr:0,set_mesh_param:2,set_status_typ:5,setup:0,short_descript:5,shortcut:0,si:3,sim:3,simul:[3,5],size:4,skip:5,slice_output:3,sliceoutput:3,slide:3,sliding_interfac:[3,4],slidinginterfac:[3,4],slidinginterfaceboundari:3,slip:3,slipwal:3,solver:[5,6],solver_param:3,solver_vers:[2,3,5],solververs:[2,5],sort_kei:3,sound:3,sourc:[0,2,3,4,5],space:4,spacing_axi:4,spacing_circumferenti:4,spacing_radi:4,spacingaxi:4,spacingcircumferenti:4,spacingradi:4,spalartallmara:3,specif:5,specifi:3,speed:3,sst:3,state:5,staticpressureratio:3,stationary_patch:3,stationarypatch:3,statu:[2,5],steadi:[3,5],step:3,stop:5,store:5,str:[0,2,3,4,5],string:5,structur:3,submiss:5,submit:5,submodul:[5,6],subsonicinflow:3,subsonicoutflowmach:3,subsonicoutflowpressur:3,support:[0,4],surfac:[4,6],surface_forc:5,surface_forces_v2:5,surface_mesh:[2,5],surface_mesh_id:5,surface_output:3,surfacemesh:[2,5],surfacemeshdownload:5,surfacemeshdraft:5,surfacemeshid:5,surfacemeshingparam:[3,4,5],surfacemeshlist:5,surfacemeshmeta:5,surfaceoutput:3,t:2,tag:[2,5],tar:5,target_nam:2,temeperatur:3,temperatur:3,thi:0,thick:4,through:0,tidy3d:0,time:3,time_step:3,time_step_s:3,timestep:[3,5],timesteppingcfl:3,timesteps:3,to_cas:5,to_csv:5,to_fil:[2,3,5],to_flow360_json:3,to_json:3,to_surface_mesh:5,to_volume_mesh:5,to_yaml:3,total:[2,5],total_forc:5,total_forces_v2:5,totalpressureratio:3,totaltemperatureratio:3,transfer:2,transition_model_solv:3,transitionmodelsolv:3,tupl:[3,4,5],turbul:[0,3],turbulec:0,turbulence_model_solv:3,turbulencemodelconst:3,turbulencemodelmodeltyp:3,turbulencemodelsolv:3,turbulent_viscosity_ratio:3,turbulentviscosityratio:3,type:[0,2,3,4,6],type_tag_str:5,typeerror:[0,5],uat:0,ugrid:5,ugridendian:5,underscore_attrs_are_priv:3,union:[3,4,5],uniontyp:5,uniqu:3,unit:[3,5],unknown:5,unless:5,unsteadi:3,unvalidatedflow360param:3,up:[3,4],updat:[2,3],update_jacobian_frequ:3,updated_at:5,updated_bi:5,updatedat:5,updatedbi:5,updatejacobianfrequ:3,upload:[2,5],upload_fil:[2,5],url:0,us:[3,5],useadjac:4,user:[0,5],user_defined_dynam:3,user_id:5,user_log:5,userdefineddynam:3,userid:5,util:6,v:[3,5],valid:[2,3,4,6],validate_al:3,validate_assign:3,validate_case_input:5,validate_cgn:5,validate_edg:4,validate_fac:4,validate_spe:3,validate_typ:5,validateflow360mesh:5,validationerror:[0,4,5],validator_api:5,valu:[0,2,3,4,5],valueerror:[0,5],variou:5,vaul:3,vector:5,veloc:[3,5],version:5,view:5,volum:[2,4,6],volume_mesh:[2,5],volume_mesh_id:5,volume_mesh_nam:5,volume_output:3,volumemesh:[2,5],volumemeshdownload:5,volumemeshdraft:5,volumemeshfileformat:5,volumemeshingparam:[4,5],volumemeshlist:5,volumemeshlog:5,volumemeshmeta:5,volumeoutput:3,volumetr:5,wall:[3,5],wallfunct:3,warn:5,web_api_endpoint:0,webapi:[0,3,5],weberror:0,webnotfounderror:0,well:3,when:[0,2,3,4,5],whether:[3,5],which:[3,5],will_export:3,work:[2,5],wrap:3,wrapper:[3,5],write:0,yaml:3,yet:[0,5],zone:4},titles:["flow360 python client package","commandline","cloud","flow360 solvers parameters","flow360 meshing parameters","component","Welcome to flow360 python client\u2019s documentation!"],titleterms:{"case":5,app:1,base:5,client:[0,6],cloud:2,commandlin:1,compon:5,constant:5,content:[0,1,2,3,4,5],document:6,environ:0,error_messag:0,except:0,flow360:[0,3,4,6],http:2,indic:6,interfac:5,mesh:[4,5],modul:[0,1,2,3,4,5],packag:0,paramet:[3,4],python:[0,6],request:2,resourc:5,restapi:2,s3_util:2,s:6,secur:2,solver:3,submodul:[3,4],surfac:5,tabl:6,type:5,util:[2,5],valid:5,volum:5,welcom:6}})