from django.urls import path, include
from . import views

urlpatterns = [
    # video_qa
    path("video_qa/<str:index>/", views.videoqa, name="video_qa"),
    path('next/<str:index>', views.next_question, name='next_question'),
    path('previous/<str:index>', views.previous_question, name='previous_question'),
    path('video_result/', views.video_result, name="video_result"),
    path('save_selection/', views.save_selection, name="save_selection"),

    # mbti_qa
    path('mbti_qa/', views.mbtiqa, name="mbti_qa"),
    path('mbti_result/', views.mbti_result, name="mbti_result"),


    # 帳號登入系統
    path('accounts/', include('allauth.urls')),
    path("login/", views.login_page, name="login_page"),
    path("register/", views.register_page, name="register_page"),
    path("logout/", views.logout_user, name="logout_user"),
    path("login_settings/", views.login_settings,
         name="login_settings"),


    # 個人檔案系統 Persona
    path("profile/<str:pk>/", views.profile, name="profile"),
    path("edit_profile/<str:pk>/", views.edit_profile, name="edit_profile"),
    path("delete_data/<str:pk>/", views.delete_data, name="delete_data"),

    # 討論串系統
    path("room/<str:pk>/", views.room, name="room"),
    path("create_room/", views.create_room, name="create_room"),
    path("update_room/<str:pk>/", views.update_room, name="update_room"),
    path("delete_room/<str:pk>/", views.delete_room, name="delete_room"),
    path("pin_room/<str:pk>/", views.pin_room, name="pin_room"),
    path("unpin_room/<str:pk>/", views.unpin_room, name="unpin_room"),
    path("delete_message/<str:pk>/", views.delete_message, name="delete_message"),
    path("chatroom_home/", views.chatroom_home, name="chatroom_home"),
    path('likeroom/<int:room_id>/', views.like_post, name='like_room'),

    # 用戶偏好設定
    path("settings/", views.platform_config, name="platform_config"),

    # 首頁
    path("", views.home_page, name="home_page"),


    # navbar
    path("about_us/", views.about_us, name="about_us"),
    path("about_game/", views.about_game, name="about_game"),
    path("highlights/", views.highlights, name="highlights"),
    path("contact_us/", views.contact_us, name="contact_us"),
]
