<template>
    <!-- <q-layout view="hHh lpR fFF lHh Lpr lFf"> -->
    <q-layout view="hHh lpR fFF">
        <HeaderToolBar></HeaderToolBar>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            :width="350"
            :breakpoint="500"
            bordered
            content-class="bg-grey-3"
        >
            <q-scroll-area class="fit">
                <div class style="max-width: 350px">
                    <q-list class="rounded-borders">
                        <q-expansion-item
                            expand-separator
                            icon="mail"
                            label="Inbox"
                            caption="5 unread emails"
                            default-opened
                            class="q-pr-xs"
                        >
                            <q-expansion-item
                                :header-inset-level="1"
                                expand-separator
                                icon="receipt"
                                label="Receipts"
                                default-opened
                            >
                                <q-expansion-item
                                    switch-toggle-side
                                    dense-toggle
                                    label="Today"
                                    :header-inset-level="1"
                                    :content-inset-level="2"
                                >
                                    <q-item clickable :active="'Outbox' === 'Outbox'" v-ripple>
                                        <q-item-section>Hello</q-item-section>
                                    </q-item>
                                    <q-item clickable :active="'Outbox' === 'Outbox'" v-ripple>
                                        <q-item-section>World</q-item-section>
                                    </q-item>
                                </q-expansion-item>
                            </q-expansion-item>
                        </q-expansion-item>
                    </q-list>
                </div>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import HeaderToolBar from "components/HeaderToolBar";

export default {
    name: "MainLayout",

    components: {
        EssentialLink,
        HeaderToolBar
    },

    data() {
        return {
            leftDrawerOpen: false,
            miniState: true,
            expanded: [
                "Satisfied customers (with avatar)",
                "Good food (with icon)"
            ],
            essentialLinks: [
                {
                    title: "Facebook",
                    caption: "@QuasarFramework",
                    icon: "public",
                    link: "https://facebook.quasar.dev"
                }
            ],
            menuList: [
                {
                    icon: "feedback",
                    label: "Index",
                    path: "/",
                    separator: false
                },
                {
                    icon: "help",
                    label: "Index2",
                    path: "Index2",
                    separator: false
                }
            ],
            simple: [
                {
                    label: "造价工程软件",
                    avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
                    children: [
                        {
                            label: "造价汇总表",
                            icon: "restaurant_menu",
                            children: [
                                { label: "Quality ingredients" },
                                { label: "Good recipe" }
                            ]
                        },
                        {
                            label: "辅助功能",
                            icon: "room_service",
                            children: [
                                { label: "Prompt attention" },
                                { label: "Professional waiter" }
                            ]
                        },
                        {
                            label: "字典管理",
                            icon: "photo",
                            children: [
                                {
                                    label: "计算参数"
                                    // img: "https://cdn.quasar.dev/img/logo_calendar_128px.png"
                                },
                                { label: "项目类型库" },
                                { label: "中方管理" }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    methods: {}
};
</script>
