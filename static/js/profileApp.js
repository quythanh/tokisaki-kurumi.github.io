new Vue({
    el: '#profile-app',
    computed: {
        lineStyles() {
            return this.lineTemp == null ? this.line : this.lineTemp;
        }
    },
    mounted() {
        const tab = document.getElementById('profile-label-1');
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
                left: 25,
                width: 129
            },
            lineTemp: null,
            img1: document.getElementById("profile-img-1"),
            img2: document.getElementById("profile-img-2")
        }
    },
    methods: {
        onTabClick(evt) {
            const tab = evt.target

            switch (tab.parentElement.id) {
                case "profile-label-1":
                    document.getElementById("profile-label-2").className = "nav-item label";
                    this.img2.className = "col-md-12 img hidden";
                    this.img1.className = "col-md-12 img";
                    this.currentTab = 0;
                    break;
                case "profile-label-2":
                    document.getElementById("profile-label-1").className = "nav-item label";
                    this.img1.className = "col-md-12 img hidden";
                    this.img2.className = "col-md-12 img";
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
                case "profile-label-1":
                    this.img2.className = "col-md-12 img hidden";
                    this.img1.className = "col-md-12 img";
                    break;
                case "profile-label-2":
                    this.img1.className = "col-md-12 img hidden";
                    this.img2.className = "col-md-12 img";
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
                    this.img2.className = "col-md-12 img hidden";
                    this.img1.className = "col-md-12 img";
                    break;
                case 1:
                    this.img1.className = "col-md-12 img hidden";
                    this.img2.className = "col-md-12 img";
                    break;
            }
        }
    }
})