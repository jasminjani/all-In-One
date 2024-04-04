const router = require('express').Router();
const isAuthorization = require('../middleware/isAuthorization');

const dynamic_table = require('../controller/dynamic_table/dynamic_table');
const js_event = require('../controller/js_event/js_event');
const kuku_kube = require('../controller/kuku_kube/kuku_kube');
const mergesort = require('../controller/mergesort/mergesort');
const { search_by_id, show_more_ways } = require('../controller/search_by_id_in_crud/search_by_id_in_crud');
const tic_tac_toe = require('../controller/tic_tac_toe/tic_tac_toe');
const delimiter_search = require('../controller/delimiter_search/delimiter_search');
const combobox_generator = require('../controller/combobox_generator/combobox_generator');
const { job_app, insert_data_into_job_app } = require('../controller/job_app_validation/job_app_validation_insert');
const { display_data, update_data_into_job_app } = require('../controller/job_app_validation/job_app_validation_update');
const { api_fetch, api_fetch_show_more } = require('../controller/api_fetch/api_fetch');
const { details, orderby } = require('../controller/select_orderby_in_crud/select_orderby_in_crud');
const { attendance, exam, reportcard } = require('../controller/attendance_and_result/attendance_and_result');
const crud_of_select_query = require('../controller/crud_of_select_query/crud_of_select_query');
const { city_state_dropdown, state, city } = require('../controller/city_state_dropdown/city_state_dropdown');
const { ajax_step_job_app_form, insert_data_ajax_step_job_app_form } = require('../controller/ajax_step_job_app_form/ajax_step_job_app_form_insert');
const { display_data_step_form, update_data_step_form, post_update_data_step_form } = require('../controller/ajax_step_job_app_form/ajax_step_job_app_form_update');
const { timezone_converter, country, cities } = require('../controller/timezone_converter/timezone_converter');
const { login, check_login } = require('../controller/index/login');
const { dashboard, logout } = require('../controller/index/dashboard');
const { registration, check_registrartion } = require('../controller/index/registration');
const { create_password, forgot_password, update_password, login_forgot_password } = require('../controller/index/password');
const error = require('../controller/error/error');


router.route('/').get(registration)
router.route('/post').post(check_registrartion)
router.route('/password/:activation').get(create_password).post(update_password)
router.route('/forgot_password/:activation').get(forgot_password)
router.route('/forgot').post(login_forgot_password)
router.route('/login').get(login)
router.route('/loginpage').post(check_login)
router.route('/dashboard/').get(isAuthorization, dashboard)
router.route('/logout').get(logout)


router.route('/dynamic_table').get(isAuthorization, dynamic_table);
router.route('/js_event').get(isAuthorization, js_event);
router.route('/kuku_kube').get(isAuthorization, kuku_kube);
router.route('/mergesort').get(isAuthorization, mergesort);
router.route('/tic_tac_toe').get(isAuthorization, tic_tac_toe);
router.route('/search_by_id_in_crud').get(isAuthorization, search_by_id);
router.route('/search_by_id_in_crud/show_more').get(isAuthorization, show_more_ways);
router.route('/delimiter_search').get(isAuthorization, delimiter_search);
router.route('/combobox_generator').get(isAuthorization, combobox_generator);
router.route('/job_app_validation').get(isAuthorization, job_app).post(isAuthorization, insert_data_into_job_app);
router.route('/job_app_validation/:id').get(isAuthorization, display_data).post(isAuthorization, update_data_into_job_app);
router.route('/api_fetch').get(isAuthorization, api_fetch);
router.route('/api_fetch/posts/:id').get(isAuthorization, api_fetch_show_more);
router.route('/select_orderby_in_crud/detail').get(isAuthorization, details);
router.route('/select_orderby_in_crud/orderby').get(isAuthorization, orderby);
router.route('/attendance_and_result/attendance').get(isAuthorization, attendance);
router.route('/attendance_and_result/exam').get(isAuthorization, exam);
router.route('/attendance_and_result/fullresult/:id').get(isAuthorization, reportcard);
router.route('/crud_of_select_query').get(isAuthorization, crud_of_select_query);
router.route('/city_state_dropdown').get(isAuthorization, city_state_dropdown);
router.route('/city_state_dropdown/state').get(isAuthorization, state);
router.route('/city_state_dropdown/city').get(isAuthorization, city);
router.route('/ajax_step_job_app_form').get(isAuthorization, ajax_step_job_app_form)
router.route('/ajax_step_job_app_form/post').post(isAuthorization, insert_data_ajax_step_job_app_form)
router.route('/ajax_step_job_app_form/display/:id').get(isAuthorization, display_data_step_form)
router.route('/ajax_step_job_app_form/update/:id').get(isAuthorization, update_data_step_form).post(isAuthorization, post_update_data_step_form)
router.route('/timezone_converter').get(isAuthorization, timezone_converter)
router.route('/timezone_converter/country').get(isAuthorization, country)
router.route('/timezone_converter/city').get(isAuthorization, cities)

router.route('*').get(error)

module.exports = router;