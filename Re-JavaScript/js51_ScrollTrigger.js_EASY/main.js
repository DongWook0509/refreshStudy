const trigger = new ScrollTrigger.default({
    trigger: {
        once: true,
        offset: {
            //[1]해당요소의 50% 정도 노출되면 보여줘 
            //element: {
            //    x: 0,
            //    y: 0.5 
            //},

            //viewport를 기준으로 50% 노출되면 보여줘
            viewport : {
                x : 0,
                y :(trigger, frame, direction) => {
                    return trigger.visible ? 0 : 0.2
                }
            }
        },
        toggle : {
            class : {
                in : 'animatedIn',
                out : 'animatedOut'
            }
        }
    }
  }); 
trigger.add('[data-trigger]')