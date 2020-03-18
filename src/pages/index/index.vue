<template>
    <q-page>
        <div id="x-spreadsheet-demo"></div>
    </q-page>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
import 'x-data-spreadsheet/dist/xspreadsheet.css'
export default {
    name: "PageIndex",
    data() {
        return {};
    },
    mounted() {
        // this.style_1();
        this.initSpreadsheet();
    },
    methods: {
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
                                }
                            },
                            {
                                label: "01皮肤",
                                click() {
                                    _that.style_2();
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
        },
        initSpreadsheet() {
            const s = new Spreadsheet("#x-spreadsheet-demo", {})
                .loadData({
                    freeze: "B3",
                    styles: [
                        {
                            bgcolor: "#f4f5f8",
                            textwrap: true,
                            color: "#900b09",
                            border: {
                                top: ["thin", "#0366d6"],
                                bottom: ["thin", "#0366d6"],
                                right: ["thin", "#0366d6"],
                                left: ["thin", "#0366d6"]
                            }
                        }
                    ]
                }) // load data
                .change(data => {
                    // save data to db
                    console.log(data);
                    console.log(s.validate());
                });

            // data validation
            s.validate();
        },
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
        }
    }
};
</script>

<style scoped>
@import "./index.less";
</style>