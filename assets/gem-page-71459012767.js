

    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127').children('.module');

            var sameHeightTitle = $module.data('sameheightitle'),
                collg = $module.data('collg'),
                colmd = $module.data('colmd'),
                colsm = $module.data('colsm'),
                colxs = $module.data('colxs');

            var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
            var col = collg;


            jQuery(window).resize(function() {
                setTimeout(function() {
                    for(var i = 0; i < $clearfixes.length; i++) {
                        if($clearfixes.eq(i).css('display') == 'block') {
                            if($clearfixes.eq(i).hasClass('visible-lg')) {
                                col = collg;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-md')) {
                                col = colmd;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-sm')) {
                                col = colsm;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-xs')) {
                                col = colxs;
                                break;
                            }
                        }
                    }
                }, 1000);
            });

            if(sameHeightTitle == '1') {
                var minHeight = 0;

                $module.find('.product-single__title').each(function() {
                });
            } else {
            }
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child1').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child1-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child1-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child1-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child2').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child2-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child2-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child2-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child3').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child3-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child3-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child3-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child4').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child4-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child4-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child4-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child5').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child5-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child5-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child5-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child6').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child6-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child6-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child6-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child7').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child7-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child7-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child7-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child8').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child8-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child8-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303127-child8-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
    
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021').children('.module');

            var sameHeightTitle = $module.data('sameheightitle'),
                collg = $module.data('collg'),
                colmd = $module.data('colmd'),
                colsm = $module.data('colsm'),
                colxs = $module.data('colxs');

            var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
            var col = collg;


            jQuery(window).resize(function() {
                setTimeout(function() {
                    for(var i = 0; i < $clearfixes.length; i++) {
                        if($clearfixes.eq(i).css('display') == 'block') {
                            if($clearfixes.eq(i).hasClass('visible-lg')) {
                                col = collg;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-md')) {
                                col = colmd;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-sm')) {
                                col = colsm;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-xs')) {
                                col = colxs;
                                break;
                            }
                        }
                    }
                }, 1000);
            });

            if(sameHeightTitle == '1') {
                var minHeight = 0;

                $module.find('.product-single__title').each(function() {
                });
            } else {
            }
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child1').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child1-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child1-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child1-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child2').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child2-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child2-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child2-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child3').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child3-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child3-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child3-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child4').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child4-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child4-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child4-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child5').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child5-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child5-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child5-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child6').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child6-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child6-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child6-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child7').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child7-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child7-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child7-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child8').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child8-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child8-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303021-child8-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
    
    
    
        jQuery(function() {
            var $hero = jQuery('#m-1607935303081');
            var $module = jQuery('#m-1607935303081').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1607935303066');
            var $module = jQuery('#m-1607935303066').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
    
    
    
    
jQuery(function() {
    var $module = jQuery('#m-1607935303089').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});
    
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child1').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child1-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607935303089-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child2').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child2-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607935303089-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child3').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child3-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607935303089-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child4').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child4-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607935303089-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child5').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child5-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child5-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607935303089-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child6').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child6-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child6-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607935303089-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child7').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child7-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child7-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607935303089-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child8').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child8-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child8-1').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1607935303089-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1607935303089-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
    
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303141').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303120').children('.module');
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1607935303132').children('.module');
        }); 
    
    
    
var gemFlag=!1;for(var i=0;i<pageLibs.length;i++){if(pageLibs[i].indexOf('gfv3product.js')!==-1){if(jQuery.gfV3Product==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfv3restabs.js')!==-1){if(jQuery.gfV3ResTabs==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfaccordion.js')!==-1){if(jQuery.gfAccordion==undefined){gemFlag=!0;break}}}if(gemFlag){var count=0;for(var i=0;i<pageLibs.length-1;i++){jQuery.getScript(pageLibs[i],function(){count++;if(count==pageLibs.length-1){jQuery.getScript(pageLibs[pageLibs.length-1],function(){})}})}}