

class AutoExec {
    constructor(cfg_data){
        let lines = cfg_data.split("\n");
        
        this.setting_data = {
        
            cl_bob_lower_amt                            :{category:"viewmodel", desc:""},
            cl_bobamt_lat                               :{category:"viewmodel", desc:""},
            cl_bobamt_vert                              :{category:"viewmodel", desc:""},
            cl_bobcycle                                 :{category:"viewmodel", desc:""},
            cl_viewmodel_shift_left_amt                 :{category:"viewmodel", desc:""},
            cl_viewmodel_shift_right_amt                :{category:"viewmodel", desc:""},
            r_drawtracers_firstperson                   :{category:"viewmodel", desc:""},
            viewmodel_fov                               :{category:"viewmodel", desc:""},
            viewmodel_offset_x                          :{category:"viewmodel", desc:""},
            viewmodel_offset_y                          :{category:"viewmodel", desc:""},
            viewmodel_offset_z                          :{category:"viewmodel", desc:""},
            viewmodel_presetpos                         :{category:"viewmodel", desc:""},
            viewmodel_recoil                            :{category:"viewmodel", desc:""},
            cl_righthand					            :{category:"viewmodel", desc:""},
            muzzleflash_light				            :{category:"viewmodel", desc:""},
            r_drawtracers_firstperson		            :{category:"viewmodel", desc:""},
        
            cl_hud_background_alpha			            :{category:"hud", desc:""},		
            cl_hud_bomb_under_radar			            :{category:"hud", desc:""},		
            cl_hud_color					            :{category:"hud", desc:""},
            cl_hud_healthammo_style			            :{category:"hud", desc:""},		
            cl_hud_playercount_pos			            :{category:"hud", desc:""},		
            cl_hud_playercount_showcount	            :{category:"hud", desc:""},				
            cl_hud_radar_scale				            :{category:"hud", desc:""},	
            hud_scaling					                :{category:"hud", desc:""},
            hud_showtargetid				            :{category:"hud", desc:""},
            hud_takesshots					            :{category:"hud", desc:""},
            mapoverview_icon_scale			            :{category:"hud", desc:""},
            cl_showloadout                              :{category:"hud", desc:""},
        
            cl_radar_always_centered                    :{category:"radar", desc:""},
            cl_radar_icon_scale_min                     :{category:"radar", desc:""},
            cl_radar_rotate                             :{category:"radar", desc:""},
            cl_radar_scale                              :{category:"radar", desc:""},
            cl_radar_square_with_scoreboard             :{category:"radar", desc:""},
        
            cl_allowdownload                            :{category:"client", desc:""},
            cl_allowupload                              :{category:"client", desc:""},
            cl_chatfilter_version                       :{category:"client", desc:""},
            cl_chatfilters                              :{category:"client", desc:""},
            cl_disablehtmlmotd                          :{category:"client", desc:""},
            cl_disablefreezecam                         :{category:"client", desc:""},
            cl_downloadfilter                           :{category:"client", desc:""},
            cl_forcepreload                             :{category:"client", desc:""},
            cl_freezecampanel_position_dynamic          :{category:"client", desc:""},
            cl_updaterate					            :{category:"client", desc:""},
            con_enable					                :{category:"client", desc:""},
            engine_no_focus_sleep					    :{category:"client", desc:""},
            key_bind_version					        :{category:"client", desc:""},
            lobby_default_privacy_bits1				    :{category:"client", desc:""},
            mat_monitorgamma					        :{category:"client", desc:""},
            mm_csgo_community_search_players_min	    :{category:"client", desc:""},
            mm_dedicated_search_maxping				    :{category:"client", desc:""},
            mm_server_search_lan_ports				    :{category:"client", desc:""},
            net_allow_multicast					        :{category:"client", desc:""},
            tr_best_course_time					        :{category:"client", desc:""},
            tr_completed_training					    :{category:"client", desc:""},
            tv_nochat			                        :{category:"client", desc:""},
            cl_cmdrate                                  :{category:"client", desc:""},
            rate                                        :{category:"client", desc:""},
        
            cl_dz_playagain_auto_spectate               :{category:"game", desc:""},
            cl_dm_buyrandomweapons                      :{category:"game", desc:""},
            cl_hide_avatar_images                       :{category:"game", desc:""},
            cl_join_advertise                           :{category:"game", desc:""},
            cl_mouselook                                :{category:"game", desc:""},
            cl_mute_all_but_friends_and_party           :{category:"game", desc:""},
            cl_mute_enemy_team                          :{category:"game", desc:""},
            cl_playerspray_auto_apply                   :{category:"game", desc:""},
            cl_sanitize_player_names				    :{category:"game", desc:""},
            cl_scoreboard_mouse_enable_binding		    :{category:"game", desc:""},
            cl_show_clan_in_death_notice			    :{category:"game", desc:""},
            cl_tablet_mapmode					        :{category:"game", desc:""},
            cl_teamid_overhead_always				    :{category:"game", desc:""},
            cl_teammate_colors_show					    :{category:"game", desc:""},
            cl_use_opens_buy_menu					    :{category:"game", desc:""},
            closeonbuy					                :{category:"game", desc:""},
            gameinstructor_enable					    :{category:"game", desc:""},
            option_duck_method					        :{category:"game", desc:""},
            option_speed_method					        :{category:"game", desc:""},
            spec_replay_autostart					    :{category:"game", desc:""},
            mat_monitorgamma_tv_enabled			        :{category:"game", desc:""},
            mat_powersavingsmode					    :{category:"game", desc:""},
            cl_autowepswitch                            :{category:"game", desc:""},
            cl_clanid                                   :{category:"game", desc:""},
            cl_color                                    :{category:"game", desc:""},
        
            m_customaccel					            :{category:"sens", desc:""},
            m_customaccel_exponent			            :{category:"sens", desc:""},
            m_customaccel_max				            :{category:"sens", desc:""},
            m_customaccel_scale				            :{category:"sens", desc:""},
            m_forward					                :{category:"sens", desc:""},
            m_mouseaccel1					            :{category:"sens", desc:""},
            m_mouseaccel2					            :{category:"sens", desc:""},
            m_mousespeed					            :{category:"sens", desc:""},
            m_pitch					                    :{category:"sens", desc:""},
            m_rawinput					                :{category:"sens", desc:""},
            m_side					                    :{category:"sens", desc:""},
            m_yaw					                    :{category:"sens", desc:""},
            sensitivity					                :{category:"sens", desc:""},
            zoom_sensitivity_ratio_mouse	            :{category:"sens", desc:""},
        
            net_graph					                :{category:"netgraph", desc:""},
            net_graphheight					            :{category:"netgraph", desc:""},
            net_graphholdsvframerate		            :{category:"netgraph", desc:""},
            net_graphipc					            :{category:"netgraph", desc:""},
            net_graphmsecs					            :{category:"netgraph", desc:""},
            net_graphpos					            :{category:"netgraph", desc:""},
            net_graphproportionalfont		            :{category:"netgraph", desc:""},
            net_graphshowinterp				            :{category:"netgraph", desc:""},
            net_graphshowlatency			            :{category:"netgraph", desc:""},
            net_graphshowsvframerate		            :{category:"netgraph", desc:""},
            net_graphsolid					            :{category:"netgraph", desc:""},
            net_graphtext					            :{category:"netgraph", desc:""},
        
            volume					                    :{category:"sound", desc:""},
            snd_deathcamera_volume					    :{category:"sound", desc:""},
            snd_duckerattacktime					    :{category:"sound", desc:""},
            snd_duckerreleasetime					    :{category:"sound", desc:""},
            snd_duckerthreshold					        :{category:"sound", desc:""},
            snd_ducking_off					            :{category:"sound", desc:""},
            snd_ducktovolume					        :{category:"sound", desc:""},
            snd_dzmusic_volume					        :{category:"sound", desc:""},
            snd_hrtf_distance_behind				    :{category:"sound", desc:""},
            snd_hrtf_voice_delay					    :{category:"sound", desc:""},
            snd_hwcompat					            :{category:"sound", desc:""},
            snd_mapobjective_volume					    :{category:"sound", desc:""},
            snd_menumusic_volume					    :{category:"sound", desc:""},
            snd_mix_async					            :{category:"sound", desc:""},
            snd_mix_async_onetime_reset				    :{category:"sound", desc:""},
            snd_mixahead					            :{category:"sound", desc:""},
            snd_music_selection					        :{category:"sound", desc:""},
            snd_music_volume_onetime_reset_2		    :{category:"sound", desc:""},
            snd_musicvolume_multiplier_inoverlay	    :{category:"sound", desc:""},
            snd_mute_losefocus					        :{category:"sound", desc:""},
            snd_mvp_volume					            :{category:"sound", desc:""},
            snd_pitchquality					        :{category:"sound", desc:""},
            snd_roundend_volume					        :{category:"sound", desc:""},
            snd_roundstart_volume					    :{category:"sound", desc:""},
            snd_surround_speakers					    :{category:"sound", desc:""},
            snd_tensecondwarning_volume				    :{category:"sound", desc:""},
        
            force_audio_english                         :{category:"sound", desc:""},
            dsp_enhance_stereo                          :{category:"sound", desc:""},
            suitvolume                                  :{category:"sound", desc:""},
        
            voice_caster_enable		                    :{category:"voice", desc:""},
            voice_caster_scale		                    :{category:"voice", desc:""},
            voice_enable			                    :{category:"voice", desc:""},
            voice_forcemicrecord	                    :{category:"voice", desc:""},
            voice_mixer_boost		                    :{category:"voice", desc:""},
            voice_mixer_mute		                    :{category:"voice", desc:""},
            voice_mixer_volume		                    :{category:"voice", desc:""},
            voice_modenable			                    :{category:"voice", desc:""},
            voice_positional		                    :{category:"voice", desc:""},
            voice_scale				                    :{category:"voice", desc:""},
            voice_system_enable		                    :{category:"voice", desc:""},
            voice_threshold                             :{category:"voice", desc:""},
        
            cl_crosshair_drawoutline					:{category:"crosshair", desc:""},
            cl_crosshair_dynamic_maxdist_splitratio		:{category:"crosshair", desc:""},
            cl_crosshair_dynamic_splitalpha_innermod	:{category:"crosshair", desc:""},
            cl_crosshair_dynamic_splitalpha_outermod	:{category:"crosshair", desc:""},
            cl_crosshair_dynamic_splitdist				:{category:"crosshair", desc:""},
            cl_crosshair_outlinethickness				:{category:"crosshair", desc:""},
            cl_crosshair_sniper_show_normal_inaccuracy	:{category:"crosshair", desc:""},
            cl_crosshair_sniper_width					:{category:"crosshair", desc:""},
            cl_crosshair_t					            :{category:"crosshair", desc:""},
            cl_crosshairalpha					        :{category:"crosshair", desc:""},
            cl_crosshaircolor					        :{category:"crosshair", desc:""},
            cl_crosshaircolor_b					        :{category:"crosshair", desc:""},
            cl_crosshaircolor_g					        :{category:"crosshair", desc:""},
            cl_crosshaircolor_r					        :{category:"crosshair", desc:""},
            cl_crosshairdot					            :{category:"crosshair", desc:""},
            cl_crosshairgap					            :{category:"crosshair", desc:""},
            cl_crosshairgap_useweaponvalue				:{category:"crosshair", desc:""},
            cl_crosshairscale					        :{category:"crosshair", desc:""},
            cl_crosshairsize					        :{category:"crosshair", desc:""},
            cl_crosshairstyle					        :{category:"crosshair", desc:""},
            cl_crosshairthickness					    :{category:"crosshair", desc:""},
            cl_crosshairusealpha					    :{category:"crosshair", desc:""},
            cl_fixedcrosshairgap					    :{category:"crosshair", desc:""},
            crosshair					                :{category:"crosshair", desc:""},
            cl_scalecrosshair					        :{category:"crosshair", desc:""},
            cl_scalecrosshair					        :{category:"crosshair", desc:""}
        };

        this.binds = {}
        this.aliases = {}

        for(var i = 0; i < lines.length; i++){
            let command_match = lines[i].match(/^\s*(\S+)\s+"\s*(\S+)\s*"(?:\s+"\s*(\S+)\s*")?/)
            try{
                if(command_match){
                    if(this.setting_data.hasOwnProperty(command_match[1])){
                        this.setting_data[command_match[1]].value = command_match[2];
                    } else if (command_match[1] == "bind"){
                        this.binds[command_match[2]] = command_match[3]
                    } else if (command_match[1] == "alias"){
                        this.aliases[command_match[2]] = command_match[3]
                    }
                }
            } catch (err){
                console.log("Ignoring Line: " + lines[i]);
                console.log(err)
            }
            
        }
    }
}

class Setting {
    constructor(command, arg1, arg2 = false){
        this.command = command;
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
}



module.exports = {
    AutoExec: AutoExec,
    AutoExecSetting: Setting
};