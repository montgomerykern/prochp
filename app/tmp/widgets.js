$(document).on('click','.wc165tab',function(){var cls='wc165selected',vis='wc165visible',el=$(this);el.parent().find('.'+cls).rclass(cls);el.aclass(cls);var p=el.closest('.wb');p.find('> .'+vis).rclass(vis);p.find('> .wc165content').eq(el.index()).aclass(vis)});COMPONENT('wc117','delay:4000;width:1140;height:500',function(self,config){var container,prevbutton,previmage,buttons,index=0,count=0,skip=true;self.make=function(){container=self.find('.wc117-images');count=self.find('.wc117-image').length;var builder=[];for(var i=0;i<count;i++)builder.push('<button><i class="fa fa-circle"></i></button>');self.append('<div class="wc117-controls">{0}</div>'.format(builder.join('')));buttons=$(self.find('.wc117-controls').get(0));self.event('click','button',function(){index=$(this).index();self.show(index);skip+=2});self.autosize();$(W).on('resize',self.autosize);interval=setInterval(function(){if(skip){skip--;return}index++;if(index>=count)index=0;self.show(index)},config.delay*1000)};self.autosize=function(){self.width(function(width){self.css('height',(config.height/config.width)*width);if(!index){index=0;self.show(index)}})};self.show=function(index){var offset=self.width();container.animate({scrollLeft:offset*index},500);previmage&&previmage.rclass('selected');setTimeout(function(){previmage=container.find('.wc117-image').eq(index).aclass('selected')},300);prevbutton&&prevbutton.rclass('selected');prevbutton=buttons.find('button').eq(index).aclass('selected')}});COMPONENT('wi117',function(self,config){self.blind();self.make=function(){self.event('keydown','input',function(e){if(e.keyCode===13){e.preventDefault();e.stopPropagation();self.find('button').trigger('click')}});self.event('click','button',function(){var btn=$(this);var input=self.find('input');var data={};data.email=input.val();data.source=location.pathname;!BLOCKED(self.ID,2000)&&data.email.isEmail()&&AJAX('POST /api/subscribers/',data,function(response){input.val('');self.find('.wi117form').aclass('hidden');self.find('.wi117success').rclass('hidden')})})}});$(document).on('click','.wi144tab',function(){var cls='wi144selected',li=$(this);var ul=li.parent();var prev=ul.find('.'+cls).rclass(cls);var container=ul.parent();var sel='.wi144body[data-index="{0}"]';container.find(sel.format(prev.attrd('index'))).rclass(cls);container.find(sel.format(li.attrd('index'))).aclass(cls);li.aclass(cls)});COMPONENT('wc157',function(self){self.make=function(){self.find('.wc157number').each(function(index){var el=$(this);(function(count,el,index){var sum=0;count.async(function(index,next){el.html(sum++);index&&setTimeout(next,index<5?200:index<10?100:5)})})(+el.html(),el,index);el.html(0);el.aclass('wc157visible')})}});