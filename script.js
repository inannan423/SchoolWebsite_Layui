

function goto1() {
    window.location.href = "http://it.bjfu.edu.cn/yjsgz/yjszs/zsgg/392609.html";
}
function goto2() {
    window.location.href = "http://it.bjfu.edu.cn/yjsgz/yjszs/zsgg/393053.html";
}
function goto3() {
    window.location.href = "http://zsb.bjfu.edu.cn/f/view-7d1ea3a21fef418fbf9d1753226d26e7-7d8d603fdce644829c8df2646ec9abe6.htm";
}
function goto4() {
    window.location.href = "http://zsb.bjfu.edu.cn/f/list-c8f80e9859b64b178b47fbc929c604e8.htm";
}
//注意：导航 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function () {
    var element = layui.element;

    //…
});
//轮播图
layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1'
        , width: '100%' //设置容器宽度
        , arrow: 'hover', //始终显示箭头
        height: '400px'
        //,anim: 'updown' //切换动画方式
    });
});

//top
layui.use('util', function () {
    var util = layui.util;

    //执行
    util.fixbar({
        bar1: false,
        bgcolor: 'black',
        click: function (type) {
            console.log(type);
            if (type === 'bar1') {
                scrollTo(0, 0);
            }
        }
    });
});

//滚动效果 
new WOW().init();
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();

layui.code({
    title: '欢迎来到北京林业大学信息学院'
    , skin: 'notepad' //如果要默认风格，不用设定该key。
});

function setTop() {
    var $ = layui.jquery, layer = layui.layer;
    var that = this;
    //多窗口模式，层叠置顶
    layer.open({
        type: 1 //此处以iframe举例
        , title: '计算机科学与技术'
        , area: ['590px', '460px']
        , shade: 0
        , maxmin: true
        , offset: [ //为了演示，随机坐标
            200, 500
        ]
        , content: '<div style="padding: 15px;">学制四年，授工学学士学位。<br> <span style="font-weight: bold;">特色优势： </span>国家级和北京市级一流本科专业。本专业特色之一是厚基础、宽口径，将计算机科学与信息技术相结合，既注重培养学生坚实的计算机理论基础，又注重软件开发能力的培养；特色之二是重工程、强实践，专业课程设置与企业的实际需要相结合，重视工程实践能力的培养；特色之三是精领域、求创新，将计算机专业知识和林业、生态领域业务知识相结合，重视创新能力与行业应用技能兼备人才的培养。形成以工程实践能力培养为主体、以创新能力培养为特色的复合型创新人才培养模式。<br> <span style="font-weight: bold;">培养目标: </span>培养适合新时代社会主义现代化建设需要，德智体美劳全面发展的计算机应用领域的复合型高端创新人才。能够运用交叉融合的多学科知识，针对计算机应用领域的复杂工程项目提出系统性的解决方案；能够综合运用计算机科学与技术专业知识、现代开发技术与工具，分析设计、开发实现及测试维护满足特定要求的计算机应用系统，具备在实际工程中的研究与创新能力；成为所在单位相关领域的专业技术研发或管理骨干。<br> <span style="font-weight: bold;">主要课程：</span>程序设计基础、计算机组成原理、离散数学、数据结构、算法设计与分析、Java程序设计、Java Web技术、操作系统、计算机体系结构、数据库系统、计算机网络、编译原理、软件工程等。<br> <span style="font-weight: bold;">就业方向：</span>学生毕业后可在科研院所、企事业单位和行政管理部门从事计算机方面的科学研究、计算机系统设计、应用开发与技术管理等工作。</div>'

        , btn: [] //只是为了演示
        , yes: function () {
            $(that).click();
        }
        , btn2: function () {
            layer.closeAll();
        }

        , zIndex: layer.zIndex //重点1
        , success: function (layero, index) {
            layer.setTop(layero); //重点2. 保持选中窗口置顶

            //记录索引，以便按 esc 键关闭。事件见代码最末尾处。
            layer.escIndex = layer.escIndex || [];
            layer.escIndex.unshift(index);
            //选中当前层时，将当前层索引放置在首位
            layero.on('mousedown', function () {
                var _index = layer.escIndex.indexOf(index);
                if (_index !== -1) {
                    layer.escIndex.splice(_index, 1); //删除原有索引
                }
                layer.escIndex.unshift(index); //将索引插入到数组首位
            });
        }
        , end: function () {
            //更新索引
            if (typeof layer.escIndex === 'object') {
                layer.escIndex.splice(0, 1);
            }
        }
    });
}
//数媒
function setTop1() {
    var $ = layui.jquery, layer = layui.layer;
    var that = this;
    //多窗口模式，层叠置顶
    layer.open({
        type: 1 //此处以iframe举例
        , title: '数字媒体技术'
        , area: ['590px', '460px']
        , shade: 0
        , maxmin: true
        , offset: [ //为了演示，随机坐标
            200, 500
        ]
        , content: '<div style="padding: 15px;">学制四年，授工学学士学位。<br> <span style="font-weight: bold;">特色优势： </span>本专业为国家级一流专业建设点，紧密围绕计算机学科发展的前沿和热点领域虚拟现实、AI人工智能、UI交互设计和数据可视化技术开展信息技术跟全媒体行业应用相结合的跨学科交叉人才培养；专业师资队伍雄厚，就业和出国深造的前景广阔，行业人才待遇丰厚。<br> <span style="font-weight: bold;">培养目标: </span> 培养掌握扎实的计算机、网络、移动媒体、跨平台新媒体和数字娱乐交互技术的基础理论和实践技能；具备综合文化素质及专业素养的复合型数字媒体高级技术应用研发和创新设计人才。<br> <span style="font-weight: bold;">主要课程：</span> 数字媒体技术基础、程序设计基础、数据结构、计算机网络、游戏引擎基础、三维建模基础、界面设计、数据可视化、计算机图形学、数字图像处理、数字视频技术及应用、三维动画原理与制作、网页动画制作、WEB前端开发、虚拟现实技术、计算机视觉、工程虚拟仿真等。<br> <span style="font-weight: bold;">就业方向：</span>毕业生可在网络媒体、移动互联网、动漫、手机游戏、数字娱乐、数字影视特效、数字城市和教育科研等跟文化创意、互联网电商、数字创意和虚拟现实、人工智能等产业相关的新媒体行业从事有关数字媒体内容创意设计、制作和技术研发工作。</div>'

        , btn: [] //只是为了演示
        , yes: function () {
            $(that).click();
        }
        , btn2: function () {
            layer.closeAll();
        }

        , zIndex: layer.zIndex //重点1
        , success: function (layero, index) {
            layer.setTop(layero); //重点2. 保持选中窗口置顶

            //记录索引，以便按 esc 键关闭。事件见代码最末尾处。
            layer.escIndex = layer.escIndex || [];
            layer.escIndex.unshift(index);
            //选中当前层时，将当前层索引放置在首位
            layero.on('mousedown', function () {
                var _index = layer.escIndex.indexOf(index);
                if (_index !== -1) {
                    layer.escIndex.splice(_index, 1); //删除原有索引
                }
                layer.escIndex.unshift(index); //将索引插入到数组首位
            });
        }
        , end: function () {
            //更新索引
            if (typeof layer.escIndex === 'object') {
                layer.escIndex.splice(0, 1);
            }
        }
    });
}
//大数据
function setTop2() {
    var $ = layui.jquery, layer = layui.layer;
    var that = this;
    //多窗口模式，层叠置顶
    layer.open({
        type: 1 //此处以iframe举例
        , title: '数据科学与大数据'
        , area: ['590px', '460px']
        , shade: 0
        , maxmin: true
        , offset: [ //为了演示，随机坐标
            200, 500
        ]
        , content: '<div style="padding: 15px;">学制四年，授工学学士学位。<br> <span style="font-weight: bold;">特色优势： </span>本专业围绕国家大数据战略发展需要，以大数据领域应用为导向，教授大数据相关的基础理论和知识，全面培养学生大数据分析挖掘、系统分析设计开发的综合实践能力。专业强调学生大数据技术复合应用型人才，通过校企合作平台，构建了大数据理论、技术与实践的一体化课程体系，形成了大众教育和精英教育相结合、工程型和研究型培养相结合、专业技能和领域知识相结合的人才培养模式。通过学习，学生可有效掌握大数据基本理论和方法，能够从事大数据分析挖掘和系统研发的综合技能，具备从事大数据科学研究及大型复杂大数据系统研发的基本素养。<br> <span style="font-weight: bold;">培养目标: </span>本专业坚持“理论学习+工程训练+新技术应用”立体化人才培养手段，通过学习、训练和实践，使学生熟练掌握大数据相关技术架构、生态系统产品以及实践应用方法，能够胜任工业及相关等领域大数据分析挖掘、架构设计、系统研发和数据资源管理等相关的工作。<br> <span style="font-weight: bold;">主要课程：</span>程序设计基础、计算机导论、电路与电子学基础、C++程序设计、离散数学、概率论与数理统计、数字电子技术、计算机组成原理、数据结构、Java程序设计、操作系统、计算机体系结构、数据库系统、Linux应用、大数据技术基础、计算机网络、数据科学中的R语言、NoSQL数据库原理、大数据采集与集成、Python应用、分布式系统与云计算、机器学习与大数据分析、Hadoop集群计算原理及编程、时间序列分析、实时大数据处理技术、林业大数据分析与决策、数据可视化技术与应用、大数据专业实践。<br> <span style="font-weight: bold;">就业方向：</span>毕业生可在企事业单位从事大数据管理、分析挖掘及大数据系统研发等工作，亦可在国家各级行政管理部门、事业单位、金融企事业单位从事大数据组织运营、大数据项目咨询和大数据服务工作。同时，可进入国内外科研院所，从事大数据科学研究、架构设计和技术研发等工作。</div>'

        , btn: [] //只是为了演示
        , yes: function () {
            $(that).click();
        }
        , btn2: function () {
            layer.closeAll();
        }

        , zIndex: layer.zIndex //重点1
        , success: function (layero, index) {
            layer.setTop(layero); //重点2. 保持选中窗口置顶

            //记录索引，以便按 esc 键关闭。事件见代码最末尾处。
            layer.escIndex = layer.escIndex || [];
            layer.escIndex.unshift(index);
            //选中当前层时，将当前层索引放置在首位
            layero.on('mousedown', function () {
                var _index = layer.escIndex.indexOf(index);
                if (_index !== -1) {
                    layer.escIndex.splice(_index, 1); //删除原有索引
                }
                layer.escIndex.unshift(index); //将索引插入到数组首位
            });
        }
        , end: function () {
            //更新索引
            if (typeof layer.escIndex === 'object') {
                layer.escIndex.splice(0, 1);
            }
        }
    });
}

function setTop3() {
    var $ = layui.jquery, layer = layui.layer;
    var that = this;
    //多窗口模式，层叠置顶
    layer.open({
        type: 1 //此处以iframe举例
        , title: '网络工程'
        , area: ['590px', '460px']
        , shade: 0
        , maxmin: true
        , offset: [ //为了演示，随机坐标
            200, 500
        ]
        , content: '<div style="padding: 15px;">学制四年，授工学学士学位。<br> <span style="font-weight: bold;">特色优势： </span>重视基础理论与实践能力的培养，将强学生对计算机网络通信的原理与应用技术的理解与掌握。<br> <span style="font-weight: bold;">培养目标: </span>本专业培养德、智、体全面发展，具有计算机科学与技术理论基础，掌握计算机网络、通信网络的通讯原理，涵盖系统管理与运行技术，着重培养能与实际计算机网络、传输网络及各类信息系统运行工作相结合的，具有计算机网络、传输网络技术研究潜能、兼具系统开发、管理与运行能力，了解学科发展最新技术的复合型人才。<br> <span style="font-weight: bold;">主要课程：</span>程序设计基础、计算机组成原理、计算机体系结构、电路与电子学基础、数字电子技术、操作系统、数据结构、计算机网络、数据库系统、UNIX环境程序设计、交换与路由、网络管理、数据分析、计算机网络安全、数字通信、verilog程序设计、传输网络、网络服务、信息系统分析与设计、网络程序设计、web系统与软件设计模式、嵌入式系统、无线网络等课程。<br> <span style="font-weight: bold;">就业方向：</span>学生毕业后可适应国民经济各行业的信息化与网络化需求，具有从事计算机网络、传输网络系统规划、设计、管理与运行能力，具有大型数据中心的管理与运行工作的潜能，可在研究机构、政府机关、高等院校、企事业单位、金融领域从事计算机网络应用系统的研究、规划、设计与开发工作。</div>'

        , btn: [] //只是为了演示
        , yes: function () {
            $(that).click();
        }
        , btn2: function () {
            layer.closeAll();
        }

        , zIndex: layer.zIndex //重点1
        , success: function (layero, index) {
            layer.setTop(layero); //重点2. 保持选中窗口置顶

            //记录索引，以便按 esc 键关闭。事件见代码最末尾处。
            layer.escIndex = layer.escIndex || [];
            layer.escIndex.unshift(index);
            //选中当前层时，将当前层索引放置在首位
            layero.on('mousedown', function () {
                var _index = layer.escIndex.indexOf(index);
                if (_index !== -1) {
                    layer.escIndex.splice(_index, 1); //删除原有索引
                }
                layer.escIndex.unshift(index); //将索引插入到数组首位
            });
        }
        , end: function () {
            //更新索引
            if (typeof layer.escIndex === 'object') {
                layer.escIndex.splice(0, 1);
            }
        }
    });
}


function setTop4() {
    var $ = layui.jquery, layer = layui.layer;
    var that = this;
    //多窗口模式，层叠置顶
    layer.open({
        type: 1 //此处以iframe举例
        , title: '物联网工程'
        , area: ['590px', '460px']
        , shade: 0
        , maxmin: true
        , offset: [ //为了演示，随机坐标
            200, 500
        ]
        , content: '<div style="padding: 15px;">学制四年，授工学学士学位。<br> <span style="font-weight: bold;">特色优势： </span><br> 该专业培养学生的软件和硬件协同开发的能力，是一个新兴的、具有广阔市场的专业。<br><span style="font-weight: bold;">培养目标: </span>培养适应我国经济建设实际需要，系统掌握物联网的基础知识体系，熟悉射频识别（RFID）、无线通信网络、全球定位系统（GPS）、感知通信协议、嵌入式系统开发，物联网关键技术研究，承担物联网的规划、设计、建设、应用、维护和管理，嵌入式系统的硬件开发与应用，嵌入式系统的软件开发与应用，物联网系统开发与集成等工作的高级专门人才。<br> <span style="font-weight: bold;">主要课程：</span>物联网导论、C语言程序设计、模拟电子技术、计算机组成原理、单片机原理及应用、操作系统、数字电子技术、信号与系统、数据结构、计算机接口技术、计算机网络、嵌入式系统、数据获取与处理、数字标签与射频识别、数据库、JAVA程序设计、传感器技术、地理信息系统原理与应用、网络编程、无线网络、物联网应用等。<br> <span style="font-weight: bold;">就业方向：</span>毕业生可在与智能感知技术有关的高新技术企业、公司，以及科研单位、国家机关和事业单位从事物联网或计算机系统的规划、设计、应用、管理、关键技术研究等工作。</div>'

        , btn: [] //只是为了演示
        , yes: function () {
            $(that).click();
        }
        , btn2: function () {
            layer.closeAll();
        }

        , zIndex: layer.zIndex //重点1
        , success: function (layero, index) {
            layer.setTop(layero); //重点2. 保持选中窗口置顶

            //记录索引，以便按 esc 键关闭。事件见代码最末尾处。
            layer.escIndex = layer.escIndex || [];
            layer.escIndex.unshift(index);
            //选中当前层时，将当前层索引放置在首位
            layero.on('mousedown', function () {
                var _index = layer.escIndex.indexOf(index);
                if (_index !== -1) {
                    layer.escIndex.splice(_index, 1); //删除原有索引
                }
                layer.escIndex.unshift(index); //将索引插入到数组首位
            });
        }
        , end: function () {
            //更新索引
            if (typeof layer.escIndex === 'object') {
                layer.escIndex.splice(0, 1);
            }
        }
    });
}