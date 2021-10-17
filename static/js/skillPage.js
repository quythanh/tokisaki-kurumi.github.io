new Vue({
    el: '#app1',
    computed: {
        lineStyles() {
            return this.lineTemp == null ? this.line : this.lineTemp;
        }
    },
    mounted() {
        const tab = document.getElementById('main-form-label');
        if (tab) {
            let styles = {
                left: tab.offsetLeft,
                width: tab.clientWidth
            }
            this.line = styles;
        }
    },
    data() {
        return {
            currentTab: 0,
            line: {
                left: 0,
                width: 89
            },
            lineTemp: null,
            main_form_content: document.getElementById("main-form-content"),
            reverse_form_content: document.getElementById("reverse-form-content")
        }
    },
    methods: {
        onTabClick(evt) {
            const tab = evt.target

            switch (tab.parentElement.id) {
                case "main-form-label":
                    document.getElementById("reverse-form-label").className = "nav-item label";
                    this.reverse_form_content.className = "col-12 hidden";
                    this.main_form_content.className = "col-12";
                    this.currentTab = 0;
                    break;
                case "reverse-form-label":
                    document.getElementById("main-form-label").className = "nav-item label";
                    this.main_form_content.className = "col-12 hidden";
                    this.reverse_form_content.className = "col-12";
                    this.currentTab = 1;
                    break;
            }
            tab.parentElement.className = "nav-item label active"

            let styles = {
                left: tab.offsetLeft,
                width: tab.clientWidth
            }
            this.line = styles;
        },
        onTabMouseEnter(evt) {
            const tab = evt.target

            switch (tab.id) {
                case "main-form-label":
                    this.reverse_form_content.className = "col-12 hidden";
                    this.main_form_content.className = "col-12";
                    break;
                case "reverse-form-label":
                    this.main_form_content.className = "col-12 hidden";
                    this.reverse_form_content.className = "col-12";
                    break;
            }

            let styles = {
                left: tab.offsetLeft,
                width: tab.clientWidth
            }
            this.lineTemp = styles;
        },
        onTabMouseLeave() {
            this.lineTemp = null;

            switch (this.currentTab) {
                case 0:
                    this.reverse_form_content.className = "col-12 hidden";
                    this.main_form_content.className = "col-12";
                    break;
                case 1:
                    this.main_form_content.className = "col-12 hidden";
                    this.reverse_form_content.className = "col-12";
                    break;

            }
        }
    }
})