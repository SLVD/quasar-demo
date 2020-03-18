<template>
    <q-page class>
        <div class="co">
            <div id="x-spreadsheet-demo"></div>
        </div>
    </q-page>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
export default {
    name: "PageIndex",
    data() {
        return {};
    },
    mounted() {
        this.initSpreadsheet();
    },
    methods: {
        skipPage() {
            this.$router.push({
                path: "/"
            });
        },
        initSpreadsheet() {
            const s = new Spreadsheet("#x-spreadsheet-demo")
                .loadData({}) // load data
                .change(data => {
                    // save data to db
                });

            // data validation
            s.validate();
        }
    }
};
</script>
