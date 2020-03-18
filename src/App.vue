<template>
    <div id="q-app">
        <router-view />
    </div>
</template>

<script>
import { colors } from "quasar";
import routes from "src/router/routes";
const remote = require("electron").remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

export default {
    name: "App",
    created() {
        this.initMenu();
        // this.$q.dark.set(false)
        // colors.setBrand("light", "#DDD");
        // colors.setBrand("primary", "#F00");
        let value = this.$q.localStorage.getItem('dk-style');
        console.log(value);
        if (value) {
          this[value]();
        } else {
          this.style_1(); // 默认样式
        }
    },
    methods: {
        style_1() {
            colors.setBrand("primary", "#1976D2");
            colors.setBrand("secondary", "#26A69A");
            colors.setBrand("accent", "#9C27B0");
            colors.setBrand("dark", "#1D1D1D");
            colors.setBrand("positive", "#21BA45");
            colors.setBrand("negative", "#C10015");
            colors.setBrand("info", "#31CCEC");
            colors.setBrand("warning", "#F2C037");
        },
        style_2() {
            colors.setBrand("primary", "#652ab8");
            colors.setBrand("secondary", "#26A69A");
            colors.setBrand("accent", "#b75dc7");
            colors.setBrand("dark", "#121111");
            colors.setBrand("positive", "#5cc475");
            colors.setBrand("negative", "#cf2337");
            colors.setBrand("info", "#31CCEC");
            colors.setBrand("warning", "#F2C037");
        },
        initMenu() {
            let template = [];
            let _that = this;
            if (process.platform === "darwin") {
                template = [
                    {
                        label: "App Demo",
                        submenu: [
                            {
                                role: "quit"
                            }
                        ]
                    }
                ];
                Menu.setApplicationMenu(Menu.buildFromTemplate(template));
            } else {
                template = [
                    {
                        label: "项目",
                        submenu: [
                            {
                                label: "index",
                                click: function() {
                                    console.log(_that.$route.path !== "/");
                                    if (_that.$route.path !== "/") {
                                        _that.$router.push({
                                            path: "/"
                                        });
                                    }
                                }
                            },
                            {
                                label: "index2",
                                click: function() {
                                    console.log(_that.$route.path !== "/");
                                    if (_that.$route.path !== "/Index2") {
                                        _that.$router.push({
                                            path: "/Index2"
                                        });
                                    }
                                }
                            }
                        ]
                    },
                    {
                        label: "云同步"
                    },
                    {
                        label: "帮助"
                    },
                    {
                        label: "设置",
                        submenu: [
                            {
                                label: "默认皮肤",
                                click() {
                                    _that.style_1();
                                    _that.$q.localStorage.set('dk-style', 'style_1');
                                    // let value = this.$q.localStorage.getItem(
                                    //     key
                                    // );
                                }
                            },
                            {
                                label: "01皮肤",
                                click() {
                                    _that.style_2();
                                    _that.$q.localStorage.set('dk-style', 'style_2');
                                }
                            }
                        ]
                    },
                    {
                        label: "关于"
                    },
                    {
                        label: "在线助手"
                    }
                ];
                Menu.setApplicationMenu(Menu.buildFromTemplate(template));
                // Menu.setApplicationMenu(null);
            }
        }
    }
};
</script>
