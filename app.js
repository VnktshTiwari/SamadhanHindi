// Samadhan JavaScript Application with FIXED Navigation, Map Management, and Complete Indian Localization
class SamadhanApp {
    constructor() {
        this.currentPage = 'home';
        this.isAdminView = false;
        this.isLoggedIn = false;
        this.currentUser = null;
        this.civicData = null;
        this.currentStep = 1;
        this.uploadedFiles = [];
        this.formData = {};
        this.currentCategorization = null;
        this.currentLanguage = 'hi'; // Default to Hindi
        
        // FIXED: Enhanced Maps Management System
        this.maps = {
            heroMap: null,
            locationMap: null,
            transparencyMap: null
        };
        this.mapContainers = {
            heroMap: 'hero-map-container',
            locationMap: 'location-map-container', 
            transparencyMap: 'transparency-map-container'
        };
        this.mapsInitialized = {
            heroMap: false,
            locationMap: false,
            transparencyMap: false
        };
        
        // Gemini AI Configuration
        this.geminiApiKey = 'AIzaSyB3pk8fqbaw7Ks0Hh5MUPxxQ6NxdpPd7dk';
        this.geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
        this.isTyping = false;
        
        // Complete Indian Translation data
        this.translations = {
            hi: {
                // Navigation
                nav_home: "होम",
                nav_report: "समस्या दर्ज करें",
                nav_dashboard: "मेरा डैशबोर्ड",
                nav_community: "समुदाय",
                nav_transparency: "पारदर्शिता",
                nav_support: "सहायता",
                admin_view: "प्रशासन",
                login: "लॉगिन",
                
                // Hero section
                hero_title: "स्थानीय प्रशासन में आपकी आवाज़ सुनाना",
                hero_subtitle: "नागरिक समस्याओं की रिपोर्ट करें, उनके समाधान को ट्रैक करें, और हमारे पारदर्शी प्लेटफॉर्म के माध्यम से अपने समुदाय के साथ जुड़ें जो नागरिकों को सीधे शहरी सेवाओं से जोड़ता है।",
                hero_report_btn: "समस्या दर्ज करें",
                hero_analytics_btn: "विश्लेषण देखें",
                hero_stat_issues: "दर्ज समस्याएं",
                hero_stat_resolved: "हल की गई समस्याएं",
                hero_stat_time: "औसत समाधान समय",
                
                // Mission
                mission_title: "हमारा मिशन",
                mission_text: "समाधान नागरिकों और स्थानीय प्रशासन के बीच की खाई को पाटता है एक पारदर्शी, कुशल प्लेटफॉर्म प्रदान करके जो नागरिक समस्याओं की रिपोर्टिंग और समाधान के लिए है। हम तकनीक, डेटा-आधारित अंतर्दृष्टि और सहयोगी समस्या-समाधान के माध्यम से समुदायों को सशक्त बनाने में विश्वास करते हैं।",
                
                // Quick nav
                quick_nav_title: "तुरंत कार्य",
                tile_report_title: "समस्या दर्ज करें",
                tile_report_desc: "फोटो और स्थान के साथ नई नागरिक समस्या दर्ज करें",
                tile_track_title: "समस्याओं को ट्रैक करें",
                tile_track_desc: "अपनी दर्ज की गई समस्याओं की प्रगति की निगरानी करें",
                tile_community_title: "समुदाय में शामिल हों",
                tile_community_desc: "चर्चाओं में भाग लें और प्राथमिकताओं पर वोट दें",
                tile_analytics_title: "विश्लेषण देखें",
                tile_analytics_desc: "शहरी प्रदर्शन और पारदर्शिता डेटा का अन्वेषण करें",
                
                // Report form
                report_title: "समस्या दर्ज करें",
                report_subtitle: "नागरिक समस्याओं की रिपोर्ट करके अपने समुदाय को बेहतर बनाने में हमारी मदद करें",
                step_location: "स्थान",
                step_details: "विवरण",
                step_media: "मीडिया",
                step_review: "समीक्षा",
                location_question: "समस्या कहां स्थित है?",
                location_label: "पता या स्थान",
                location_placeholder: "पता दर्ज करें या स्थान का वर्णन करें",
                use_location: "मेरा स्थान उपयोग करें",
                details_question: "हमें समस्या के बारे में बताएं",
                category_label: "श्रेणी",
                select_category: "श्रेणी चुनें",
                subcategory_label: "उप-श्रेणी",
                select_subcategory: "उप-श्रेणी चुनें",
                priority_label: "प्राथमिकता स्तर",
                select_priority: "प्राथमिकता चुनें",
                priority_low: "कम - मामूली असुविधा",
                priority_medium: "मध्यम - सामान्य चिंता",
                priority_high: "उच्च - महत्वपूर्ण समस्या",
                priority_critical: "गंभीर - सुरक्षा खतरा",
                description_label: "विवरण",
                description_placeholder: "समस्या का विस्तृत विवरण दें...",
                ai_suggestion_title: "AI श्रेणीकरण सुझाव:",
                media_question: "फोटो या दस्तावेज़ जोड़ें",
                upload_prompt: "फाइलें यहां ड्रैग करें या ब्राउज़ करने के लिए क्लिक करें",
                upload_hint: "समर्थित: JPG, PNG, PDF (अधिकतम 5MB प्रत्येक)",
                review_question: "अपनी रिपोर्ट की समीक्षा करें",
                anonymous_submit: "गुमनाम रूप से दर्ज करें",
                name_label: "आपका नाम (वैकल्पिक)",
                name_placeholder: "अपना नाम दर्ज करें",
                email_label: "संपर्क ईमेल",
                email_placeholder: "your@email.com",
                phone_label: "फोन नंबर (वैकल्पिक)",
                phone_placeholder: "9876543210",
                prev_button: "पिछला",
                next_button: "अगला",
                submit_report: "रिपोर्ट दर्ज करें",
                characters: "अक्षर",
                
                // Dashboard
                dashboard_title: "मेरा डैशबोर्ड",
                dashboard_subtitle: "अपनी दर्ज की गई समस्याओं को ट्रैक करें और उनकी प्रगति की निगरानी करें",
                active_issues: "सक्रिय समस्याएं",
                resolved_issues: "हल की गई समस्याएं",
                avg_resolution: "औसत समाधान",
                search_issues: "अपनी समस्याएं खोजें...",
                all_statuses: "सभी स्थितियां",
                status_open: "खुली",
                status_in_progress: "प्रगति में",
                status_resolved: "हल हो गई",
                status_closed: "बंद",
                export_btn: "निर्यात",
                notification_preferences: "सूचना प्राथमिकताएं",
                email_notifications: "स्थिति अपडेट के लिए ईमेल सूचनाएं",
                push_notifications: "ब्राउज़र पुश सूचनाएं",
                weekly_digest: "साप्ताहिक सारांश डाइजेस्ट",
                
                // Support
                support_title: "सहायता केंद्र",
                support_subtitle: "हमारे AI-संचालित सहायक के साथ प्लेटफॉर्म का उपयोग करने और समस्याओं की रिपोर्ट करने में सहायता प्राप्त करें",
                ai_assistant: "AI सहायक",
                ai_assistant_desc: "नागरिक समस्याओं और प्लेटफॉर्म उपयोग के बारे में तुरंत, बुद्धिमान उत्तर प्राप्त करें",
                start_ai_chat: "AI चैट शुरू करें",
                samadhan_ai: "समाधान AI सहायक",
                ai_welcome: "नमस्ते! मैं आपका AI-संचालित समाधान सहायक हूं। मैं आपकी समस्याओं की रिपोर्ट करने, उनकी प्रगति को ट्रैक करने, प्लेटफॉर्म का उपयोग करने, और नागरिक सहभागिता के बारे में प्रश्नों के उत्तर देने में आपकी सहायता कर सकता हूं। आप क्या जानना चाहते हैं?",
                ai_disclaimer: "AI-जनरेटेड प्रतिक्रिया - कृपया महत्वपूर्ण विवरणों की हमारी सहायता टीम से पुष्टि करें।",
                chat_placeholder: "समाधान के बारे में कुछ भी पूछें...",
                send: "भेजें",
                quick_report: "समस्या कैसे रिपोर्ट करूं?",
                quick_track: "समस्या कैसे ट्रैक करूं?",
                quick_info: "कौन सी जानकारी चाहिए?",
                quick_time: "समाधान का समय?",
                
                // Newsletter
                newsletter_title: "अपडेट प्राप्त करें",
                newsletter_desc: "नागरिक सुधारों और प्लेटफॉर्म सुविधाओं की नवीनतम अपडेट पाएं।",
                newsletter_email: "अपना ईमेल दर्ज करें",
                newsletter_subscribe: "सब्सक्राइब करें",
                
                // Common elements
                platform: "प्लेटफॉर्म",
                support: "सहायता",
                legal: "कानूनी",
                skip_to_content: "मुख्य सामग्री पर जाएं",
                
                // Footer
                footer_desc: "तकनीक और AI सहायता के माध्यम से एक बेहतर समुदाय के लिए नागरिकों को स्थानीय प्रशासन से जोड़ना।",
                help_center: "सहायता केंद्र",
                about_us: "हमारे बारे में",
                contact: "संपर्क",
                api_docs: "API प्रलेखन",
                privacy_policy: "गोपनीयता नीति",
                terms_of_service: "सेवा की शर्तें",
                accessibility: "पहुंच",
                open_data: "ओपन डेटा",
                all_rights_reserved: "सभी अधिकार सुरक्षित।",
                made_with_love: "बेहतर समुदायों के लिए ❤️ के साथ बनाया गया",
                powered_by_ai: "AI द्वारा संचालित"
            },
            en: {
                // Navigation
                nav_home: "Home",
                nav_report: "Report Issue",
                nav_dashboard: "My Dashboard",
                nav_community: "Community",
                nav_transparency: "Transparency",
                nav_support: "Support",
                admin_view: "Admin View",
                login: "Login",
                
                // Hero section
                hero_title: "Making Your Voice Heard in Local Government",
                hero_subtitle: "Report civic issues, track their resolution, and engage with your community through our transparent platform that connects citizens directly with city services.",
                hero_report_btn: "Report an Issue",
                hero_analytics_btn: "View Analytics",
                hero_stat_issues: "Issues Reported",
                hero_stat_resolved: "Issues Resolved",
                hero_stat_time: "Avg Resolution Time",
                
                // Mission
                mission_title: "Our Mission",
                mission_text: "Samadhan bridges the gap between citizens and local government by providing a transparent, efficient platform for reporting and resolving civic issues. We believe in empowering communities through technology, data-driven insights, and collaborative problem-solving.",
                
                // Common elements
                platform: "Platform",
                support: "Support",
                legal: "Legal",
                skip_to_content: "Skip to main content"
            },
            ta: {
                // Navigation (Tamil)
                nav_home: "முகப்பு",
                nav_report: "சிக்கல் அறிக்கை",
                nav_dashboard: "என் டாஷ்போர்ட்",
                nav_community: "சமுதாயம்",
                nav_transparency: "வெளிப்படைத்தன்மை",
                nav_support: "ஆதரவு",
                admin_view: "நிர்வாக காட்சி",
                login: "உள்நுழைவு"
            },
            bn: {
                // Navigation (Bengali)
                nav_home: "হোম",
                nav_report: "সমস্যা রিপোর্ট",
                nav_dashboard: "আমার ড্যাশবোর্ড",
                nav_community: "কমিউনিটি",
                nav_transparency: "স্বচ্ছতা",
                nav_support: "সহায়তা",
                admin_view: "প্রশাসন",
                login: "লগইন"
            },
            te: {
                // Navigation (Telugu)
                nav_home: "హోమ్",
                nav_report: "సమస్య నివేదిక",
                nav_dashboard: "నా డాష్‌బోర్డ్",
                nav_community: "కమ్యూనిటీ",
                nav_transparency: "పారదర్శకత",
                nav_support: "మద్దతు",
                admin_view: "నిర్వాహణ",
                login: "లాగిన్"
            },
            mr: {
                // Navigation (Marathi)
                nav_home: "होम",
                nav_report: "समस्या नोंदवा",
                nav_dashboard: "माझा डॅशबोर्ड",
                nav_community: "समुदाय",
                nav_transparency: "पारदर्शकता",
                nav_support: "सहाय्य",
                admin_view: "प्रशासन",
                login: "लॉगिन"
            },
            gu: {
                // Navigation (Gujarati)
                nav_home: "હોમ",
                nav_report: "સમસ્યા રિપોર્ટ",
                nav_dashboard: "મારું ડેશબોર્ડ",
                nav_community: "સમુદાય",
                nav_transparency: "પારદર્શિતા",
                nav_support: "સહાય",
                admin_view: "વહીવટ",
                login: "લોગિન"
            }
        };
        
        // Initialize immediately
        this.init();
    }

    async init() {
        console.log('Initializing Samadhan App...');
        try {
            await this.loadCivicData();
            this.detectTheme();
            this.initializeLanguage();
            this.setupEventListeners();
            this.setupNavigation();
            this.populateInitialData();
            
            // FIXED: Initialize home page maps immediately
            setTimeout(() => {
                this.initializeHomePage();
            }, 300);
            
            // Add resize event listener for mobile compatibility
            this.setupResizeListener();
            
            console.log('Samadhan App initialized successfully');
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    // FIXED: Initialize home page immediately on app start
    initializeHomePage() {
        console.log('Initializing home page on startup');
        this.populateTestimonials();
        this.initializeHeroMap();
    }

    // FIXED: Enhanced resize listener for mobile compatibility
    setupResizeListener() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 150);
        });

        // Handle orientation change on mobile
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleResize();
            }, 500);
        });
    }

    handleResize() {
        console.log('Handling resize event');
        
        // Invalidate size for all active maps
        Object.keys(this.maps).forEach(mapKey => {
            if (this.maps[mapKey]) {
                try {
                    setTimeout(() => {
                        if (this.maps[mapKey]) {
                            this.maps[mapKey].invalidateSize();
                            console.log(`Resized map: ${mapKey}`);
                        }
                    }, 100);
                } catch (error) {
                    console.warn(`Error resizing map ${mapKey}:`, error);
                }
            }
        });
    }

    initializeLanguage() {
        // Check for saved language preference - Default to Hindi
        const savedLanguage = localStorage.getItem('samadhan-language') || 'hi';
        this.currentLanguage = savedLanguage;
        
        // Update language selector
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            languageSelector.value = this.currentLanguage;
        }
        
        // Apply language
        this.applyLanguage(this.currentLanguage);
        
        console.log('Language initialized:', this.currentLanguage);
    }

    changeLanguage(languageCode) {
        console.log('Changing language to:', languageCode);
        this.currentLanguage = languageCode;
        
        // Save language preference
        localStorage.setItem('samadhan-language', languageCode);
        
        // Apply language
        this.applyLanguage(languageCode);
        
        // Apply font class to body
        document.body.className = document.body.className.replace(/lang-\w+/g, '');
        if (languageCode !== 'en') {
            document.body.classList.add(`lang-${languageCode}`);
        }
        
        this.showToast('भाषा सफलतापूर्वक बदल दी गई', 'success');
    }

    applyLanguage(languageCode) {
        const translations = this.translations[languageCode] || this.translations.hi;
        
        // Translate elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Translate placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[key]) {
                element.placeholder = translations[key];
            }
        });
        
        // Update document language attribute
        document.documentElement.lang = languageCode;
        
        console.log('Language applied:', languageCode);
    }

    async loadCivicData() {
        this.civicData = {
            civic_issues: [
                {
                    id: "SMD-0001",
                    title: "बस स्टॉप की मरम्मत - अंधेरी पूर्व",
                    description: "अंधेरी पूर्व क्षेत्र में बस स्टॉप शेल्टर क्षतिग्रस्त है और तुरंत मरम्मत की आवश्यकता है",
                    category: "सार्वजनिक सुविधाएं",
                    subcategory: "बस स्टॉप की मरम्मत",
                    status: "Resolved",
                    priority: "Medium",
                    location: { name: "अंधेरी पूर्व, मुंबई", lat: 19.1136, lng: 72.8697 },
                    address: "चकाला मेट्रो स्टेशन के पास, अंधेरी पूर्व, मुंबई - 400099",
                    department: "BEST (बस परिवहन)",
                    created_date: "2025-08-30T23:37:44.524318",
                    reporter: "प्रिया शर्मा",
                    reporter_contact: "priya.sharma@gmail.com",
                    votes: 14,
                    comments: 1,
                    estimated_resolution: "1 सप्ताह"
                },
                {
                    id: "SMD-0002",
                    title: "सड़क सुरक्षा चिंताएं - कोरमंगला",
                    description: "कोरमंगला 4वें ब्लॉक में स्पीड ब्रेकर गायब और खराब लाइटिंग के कारण सुरक्षा समस्याएं",
                    category: "यातायात और परिवहन",
                    subcategory: "सड़क सुरक्षा चिंताएं",
                    status: "In Progress",
                    priority: "Critical",
                    location: { name: "कोरमंगला, बेंगलुरु", lat: 12.9279, lng: 77.6271 },
                    address: "4वां ब्लॉक, कोरमंगला, बेंगलुरु - 560034",
                    department: "BBMP यातायात",
                    created_date: "2025-09-01T23:37:44.524318",
                    reporter: "राजेश कुमार",
                    reporter_contact: "rajesh.kumar@outlook.com",
                    votes: 8,
                    comments: 5,
                    estimated_resolution: "2 सप्ताह"
                },
                {
                    id: "SMD-0003",
                    title: "गड्ढे - कनॉट प्लेस",
                    description: "मुख्य सड़क पर बड़े गड्ढे ट्रैफिक जाम और वाहनों को नुकसान पहुंचा रहे हैं कनॉट प्लेस के पास",
                    category: "सड़क और बुनियादी ढांचा",
                    subcategory: "गड्ढे",
                    status: "Resolved",
                    priority: "High",
                    location: { name: "कनॉट प्लेस, दिल्ली", lat: 28.6315, lng: 77.2167 },
                    address: "इनर सर्कल, कनॉट प्लेस, नई दिल्ली - 110001",
                    department: "PWD दिल्ली",
                    created_date: "2025-09-05T23:37:44.524318",
                    reporter: "अमित सिंह",
                    reporter_contact: "amit.singh@yahoo.in",
                    votes: 23,
                    comments: 8,
                    estimated_resolution: "1-3 दिन"
                },
                {
                    id: "SMD-0004",
                    title: "पानी का रिसाव - साल्ट लेक",
                    description: "मुख्य पानी पाइपलाइन फटने से सड़क पर बाढ़ आ रही है साल्ट लेक सिटी सेक्टर में",
                    category: "पानी और सीवरेज",
                    subcategory: "पानी का रिसाव",
                    status: "Open",
                    priority: "Critical",
                    location: { name: "साल्ट लेक सिटी, कोलकाता", lat: 22.5726, lng: 88.3639 },
                    address: "सेक्टर V, साल्ट लेक सिटी, कोलकाता - 700091",
                    department: "KMC जल आपूर्ति",
                    created_date: "2025-09-10T10:15:00.000Z",
                    reporter: "दीपिका घोष",
                    reporter_contact: "deepika.ghosh@gmail.com",
                    votes: 35,
                    comments: 12,
                    estimated_resolution: "2-3 दिन"
                },
                {
                    id: "SMD-0005",
                    title: "टूटी स्ट्रीट लाइट - अन्ना नगर",
                    description: "अन्ना नगर पश्चिम में कई स्ट्रीट लाइटें काम नहीं कर रहीं जिससे सुरक्षा चिंताएं हैं",
                    category: "सार्वजनिक सुरक्षा",
                    subcategory: "स्ट्रीट लाइट काम नहीं कर रही",
                    status: "In Progress",
                    priority: "High",
                    location: { name: "अन्ना नगर, चेन्नई", lat: 13.0827, lng: 80.2707 },
                    address: "अन्ना नगर पश्चिम विस्तार, चेन्नई - 600101",
                    department: "चेन्नई निगम",
                    created_date: "2025-09-08T18:30:00.000Z",
                    reporter: "लक्ष्मी अय्यर",
                    reporter_contact: "lakshmi.iyer@rediffmail.com",
                    votes: 18,
                    comments: 6,
                    estimated_resolution: "1 सप्ताह"
                }
            ],
            categories: {
                "सड़क और बुनियादी ढांचा": ["गड्ढे", "क्षतिग्रस्त सड़क सतह", "गुम मैनहोल कवर", "जलभराव वाली सड़कें", "टूटे फुटपाथ", "क्षतिग्रस्त पुल", "सड़क पर निर्माण मलबा"],
                "पानी और सीवरेज": ["पानी का रिसाव", "पानी की आपूर्ति नहीं", "गंदा पानी की आपूर्ति", "बंद सीवेज", "अतिप्रवाह नालियां", "कम पानी का दबाव", "सीवेज मेन होल कवर गुम"],
                "कचरा प्रबंधन": ["कचरा साफ नहीं हुआ", "क्षतिग्रस्त कचरा डिब्बे", "कचरे को जलाना", "सड़कों की सफाई नहीं", "अवैध डंपिंग", "अतिप्रवाह कचरा कैन"],
                "सार्वजनिक सुरक्षा": ["स्ट्रीट लाइट काम नहीं कर रही", "गुम स्ट्रीट लाइटें", "गिरे हुए पेड़", "आवारा जानवर", "मृत जानवर", "सार्वजनिक सुरक्षा खतरे"],
                "सार्वजनिक सुविधाएं": ["गंदे सार्वजनिक शौचालय", "सार्वजनिक शौचालय क्षतिग्रस्त", "पार्कों की देखभाल", "बस स्टॉप की मरम्मत", "सार्वजनिक भवन की मरम्मत"],
                "यातायात और परिवहन": ["ट्रैफिक सिग्नल खराबी", "अवैध पार्किंग", "ट्रैफिक जाम", "सार्वजनिक परिवहन समस्याएं", "सड़क सुरक्षा चिंताएं"],
                "पर्यावरण": ["वायु प्रदूषण", "ध्वनि प्रदूषण", "पेड़ काटने की आवश्यकता", "मच्छर का प्रजनन", "अवैध निर्माण", "भूमि उल्लंघन"]
            },
            testimonials: [
                {
                    name: "प्रिया शर्मा",
                    location: "अंधेरी पूर्व, मुंबई",
                    comment: "समाधान के जरिए मेरी सड़क के गड्ढे की रिपोर्ट करना बहुत आसान था। एक सप्ताह में ही इसकी मरम्मत हो गई!",
                    rating: 5,
                    issue_type: "सड़क रखरखाव"
                },
                {
                    name: "राजेश कुमार",
                    location: "कोरमंगला, बेंगलुरु",
                    comment: "मुझे अच्छा लगता है कि मैं अपनी शिकायत की प्रगति को ट्रैक कर सकता हूं। बहुत अच्छी पारदर्शिता!",
                    rating: 5,
                    issue_type: "स्ट्रीट लाइटिंग"
                },
                {
                    name: "दीपिका घोष",
                    location: "साल्ट लेक, कोलकाता",
                    comment: "जियोलोकेशन फीचर शानदार है - मैन्युअल रूप से पते टाइप करने की जरूरत नहीं।",
                    rating: 4,
                    issue_type: "कचरा प्रबंधन"
                }
            ],
            platform_stats: {
                total_issues_reported: 12847,
                issues_resolved: 9634,
                average_resolution_time: "8.2 दिन",
                active_users: 15623,
                departments_connected: 12,
                satisfaction_rate: 94.2,
                response_rate: 97.8
            }
        };
        console.log('Indian civic data loaded successfully with', this.civicData.civic_issues.length, 'issues');
    }

    // FIXED: Completely rewritten event handling system
    setupEventListeners() {
        console.log('Setting up FIXED event listeners...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.bindEvents();
            });
        } else {
            this.bindEvents();
        }
    }

    // FIXED: Robust event binding system
    bindEvents() {
        console.log('Binding FIXED events...');

        try {
            // FIXED: Universal click handler with proper delegation
            document.body.addEventListener('click', (e) => {
                console.log('Click detected on:', e.target);
                
                // Language selector - prevent navigation
                if (e.target.matches('#language-selector') || e.target.closest('#language-selector')) {
                    console.log('Language selector clicked');
                    return;
                }

                // Navigation links - FIXED with comprehensive selectors
                const navElement = e.target.closest('[data-page]') || 
                                 e.target.closest('.navbar__link') ||
                                 e.target.closest('.quick-nav__tile') ||
                                 e.target.closest('a[href^="#"]');
                
                if (navElement) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    let page;
                    if (navElement.hasAttribute('data-page')) {
                        page = navElement.getAttribute('data-page');
                    } else if (navElement.getAttribute('href')) {
                        page = navElement.getAttribute('href').replace('#', '');
                    }
                    
                    if (page) {
                        console.log('FIXED Navigation to:', page);
                        this.navigateToPage(page);
                        return;
                    }
                }

                // Theme toggle
                if (e.target.matches('#theme-toggle') || e.target.closest('#theme-toggle')) {
                    e.preventDefault();
                    console.log('Theme toggle clicked');
                    this.toggleTheme();
                    return;
                }

                // Login button
                if (e.target.matches('#login-btn') || e.target.closest('#login-btn')) {
                    e.preventDefault();
                    this.toggleLogin();
                    return;
                }

                // Admin toggle
                if (e.target.matches('#admin-toggle') || e.target.closest('#admin-toggle')) {
                    e.preventDefault();
                    this.toggleAdminView();
                    return;
                }

                // Mobile navigation toggle
                if (e.target.matches('#navbar-toggle') || e.target.closest('#navbar-toggle')) {
                    e.preventDefault();
                    const navMenu = document.getElementById('navbar-menu');
                    if (navMenu) {
                        navMenu.classList.toggle('active');
                        const isExpanded = navMenu.classList.contains('active');
                        e.target.closest('#navbar-toggle').setAttribute('aria-expanded', isExpanded);
                    }
                    return;
                }

                // Categorization controls
                if (e.target.matches('#categorize-by-department') || e.target.closest('#categorize-by-department')) {
                    e.preventDefault();
                    this.categorizeIssuesByDepartment();
                    return;
                }

                if (e.target.matches('#categorize-by-priority') || e.target.closest('#categorize-by-priority')) {
                    e.preventDefault();
                    this.categorizeIssuesByPriority();
                    return;
                }

                if (e.target.matches('#reset-categorization') || e.target.closest('#reset-categorization')) {
                    e.preventDefault();
                    this.resetCategorization();
                    return;
                }
            });

            // FIXED: Direct language selector handling
            const languageSelector = document.getElementById('language-selector');
            if (languageSelector) {
                languageSelector.addEventListener('change', (e) => {
                    e.stopPropagation();
                    console.log('Language changed to:', e.target.value);
                    this.changeLanguage(e.target.value);
                });
            }

            // Newsletter form
            const newsletterForm = document.getElementById('newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.showToast('सब्सक्राइब करने के लिए धन्यवाद! आपको जल्द ही अपडेट मिलेंगे।', 'success');
                    newsletterForm.reset();
                });
            }

            // Setup other components
            this.setupReportForm();
            this.setupSupportSystem();
            this.setupDashboardFilters();
            this.setupCommunityInteractions();
            this.setupFAQInteractions();
            this.setupModals();

            console.log('FIXED Event binding completed');
        } catch (error) {
            console.error('Error in bindEvents:', error);
        }
    }

    // FIXED: Enhanced Map Cleanup and Initialization System
    destroyMap(mapKey) {
        console.log(`Destroying map: ${mapKey}`);
        
        if (this.maps[mapKey]) {
            try {
                // Remove the map instance
                this.maps[mapKey].remove();
                console.log(`Map ${mapKey} removed successfully`);
            } catch (error) {
                console.warn(`Error removing map ${mapKey}:`, error);
            }
            
            // Clear the reference
            this.maps[mapKey] = null;
            this.mapsInitialized[mapKey] = false;
        }

        // Clear the container HTML to prevent conflicts
        const container = document.getElementById(this.mapContainers[mapKey]);
        if (container) {
            container.innerHTML = '';
        }
    }

    destroyAllMaps() {
        console.log('Destroying all maps');
        Object.keys(this.maps).forEach(mapKey => {
            this.destroyMap(mapKey);
        });
    }

    // FIXED: Check if container exists and is visible before initializing
    isContainerReady(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container ${containerId} not found`);
            return false;
        }

        // Check if container is visible and has dimensions
        const rect = container.getBoundingClientRect();
        const isVisible = rect.width > 0 && rect.height > 0;
        
        if (!isVisible) {
            console.warn(`Container ${containerId} not visible or has no dimensions`);
        }

        return true; // Return true anyway to allow initialization attempt
    }

    // FIXED: Enhanced Hero Map Initialization with proper error handling
    initializeHeroMap() {
        const mapKey = 'heroMap';
        const containerId = this.mapContainers[mapKey];
        
        console.log('FIXED: Initializing hero map...');

        // Check if container is ready
        if (!this.isContainerReady(containerId)) {
            console.warn('Hero map container not ready, retrying...');
            setTimeout(() => this.initializeHeroMap(), 500);
            return;
        }

        // Destroy existing map if it exists
        if (this.maps[mapKey]) {
            this.destroyMap(mapKey);
        }

        // Check if Leaflet is available
        if (typeof L === 'undefined') {
            console.warn('Leaflet not available, showing fallback');
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f9ff; color: #0369a1; font-weight: 500;">इंटरैक्टिव मानचित्र लोड हो रहा है...</div>';
            }
            return;
        }

        try {
            // Initialize map for Indian locations - centered on Delhi
            this.maps[mapKey] = L.map(containerId, {
                center: [28.6139, 77.2090], // Delhi coordinates
                zoom: 5, // Show all of India
                zoomControl: true,
                attributionControl: true
            });
            
            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(this.maps[mapKey]);

            // Mark as initialized
            this.mapsInitialized[mapKey] = true;

            // Invalidate size after short delay
            setTimeout(() => {
                if (this.maps[mapKey]) {
                    this.maps[mapKey].invalidateSize();
                    console.log('Hero map size invalidated');
                    
                    // Add markers for civic issues
                    if (this.civicData && this.civicData.civic_issues) {
                        this.addIssueMarkersToMap(this.maps[mapKey], this.civicData.civic_issues);
                    }
                }
            }, 100);

            console.log('FIXED: Hero map initialized successfully');
        } catch (error) {
            console.error('Error creating hero map:', error);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #fef3c7; color: #92400e; font-weight: 500;">मानचित्र अस्थायी रूप से अनुपलब्ध</div>';
            }
        }
    }

    // FIXED: Enhanced Location Map Initialization
    initializeLocationMap() {
        const mapKey = 'locationMap';
        const containerId = this.mapContainers[mapKey];
        
        console.log('FIXED: Initializing location map...');

        // Check if container is ready
        if (!this.isContainerReady(containerId)) {
            console.warn('Location map container not ready, retrying...');
            setTimeout(() => this.initializeLocationMap(), 500);
            return;
        }

        // Destroy existing map if it exists
        if (this.maps[mapKey]) {
            this.destroyMap(mapKey);
        }

        if (typeof L === 'undefined') {
            console.warn('Leaflet not available, showing fallback');
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f9ff; color: #0369a1; font-weight: 500;">स्थान मानचित्र लोड हो रहा है...</div>';
            }
            return;
        }

        try {
            this.maps[mapKey] = L.map(containerId, {
                center: [28.6139, 77.2090], // Delhi coordinates
                zoom: 11,
                zoomControl: true
            });
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(this.maps[mapKey]);

            this.mapsInitialized[mapKey] = true;

            setTimeout(() => {
                if (this.maps[mapKey]) {
                    this.maps[mapKey].invalidateSize();
                    console.log('Location map size invalidated');
                }
            }, 100);

            console.log('FIXED: Location map initialized successfully');
        } catch (error) {
            console.error('Error creating location map:', error);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #fef3c7; color: #92400e; font-weight: 500;">स्थान मानचित्र अस्थायी रूप से अनुपलब्ध</div>';
            }
        }
    }

    // FIXED: Enhanced Transparency Map Initialization
    initializeTransparencyMap() {
        const mapKey = 'transparencyMap';
        const containerId = this.mapContainers[mapKey];
        
        console.log('FIXED: Initializing transparency map...');

        // Check if container is ready
        if (!this.isContainerReady(containerId)) {
            console.warn('Transparency map container not ready, retrying...');
            setTimeout(() => this.initializeTransparencyMap(), 500);
            return;
        }

        // Destroy existing map if it exists
        if (this.maps[mapKey]) {
            this.destroyMap(mapKey);
        }

        if (typeof L === 'undefined') {
            console.warn('Leaflet not available, showing fallback');
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f9ff; color: #0369a1; font-weight: 500;">हीट मैप लोड हो रहा है...</div>';
            }
            return;
        }

        try {
            this.maps[mapKey] = L.map(containerId, {
                center: [28.6139, 77.2090], // Delhi coordinates
                zoom: 6, // Show broader area for transparency
                zoomControl: true
            });
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(this.maps[mapKey]);

            this.mapsInitialized[mapKey] = true;

            setTimeout(() => {
                if (this.maps[mapKey]) {
                    this.maps[mapKey].invalidateSize();
                    console.log('Transparency map size invalidated');
                    
                    // Add heat map style markers
                    if (this.civicData && this.civicData.civic_issues) {
                        this.addHeatMapMarkers(this.maps[mapKey], this.civicData.civic_issues);
                    }
                }
            }, 100);

            console.log('FIXED: Transparency map initialized successfully');
        } catch (error) {
            console.error('Error creating transparency map:', error);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #fef3c7; color: #92400e; font-weight: 500;">हीट मैप अस्थायी रूप से अनुपलब्ध</div>';
            }
        }
    }

    addIssueMarkersToMap(map, issues) {
        if (typeof L === 'undefined' || !map) return;

        // Create marker cluster group if available, otherwise regular layer group
        let markerGroup = typeof L.markerClusterGroup !== 'undefined' 
            ? L.markerClusterGroup({
                maxClusterRadius: 50,
                spiderfyOnMaxZoom: true,
                showCoverageOnHover: false
              })
            : L.layerGroup();

        issues.forEach(issue => {
            try {
                const marker = L.marker([issue.location.lat, issue.location.lng]);
                
                // Create popup content in Hindi
                const popupContent = `
                    <div style="max-width: 200px; font-family: system-ui;">
                        <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #1e40af;">${issue.title}</h4>
                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #6b7280;">${issue.description.substring(0, 80)}...</p>
                        <div style="font-size: 11px; color: #9ca3af;">
                            <strong>स्थिति:</strong> ${issue.status}<br>
                            <strong>प्राथमिकता:</strong> ${issue.priority}<br>
                            <strong>विभाग:</strong> ${issue.department}
                        </div>
                    </div>
                `;
                
                marker.bindPopup(popupContent);
                markerGroup.addLayer(marker);
            } catch (error) {
                console.warn('Error adding marker for issue:', issue.id, error);
            }
        });

        markerGroup.addTo(map);
        
        // Fit map to markers if there are any
        if (issues.length > 0) {
            try {
                const group = new L.featureGroup(markerGroup.getLayers ? markerGroup.getLayers() : [markerGroup]);
                if (group.getBounds && group.getBounds().isValid && group.getBounds().isValid()) {
                    map.fitBounds(group.getBounds().pad(0.1));
                }
            } catch (error) {
                console.warn('Error fitting bounds:', error);
            }
        }
    }

    addHeatMapMarkers(map, issues) {
        if (typeof L === 'undefined' || !map) return;

        // Color mapping for different priorities and statuses
        const getMarkerColor = (issue) => {
            if (issue.priority === 'Critical') return '#dc2626';
            if (issue.priority === 'High') return '#ea580c';
            if (issue.priority === 'Medium') return '#d97706';
            return '#65a30d';
        };

        issues.forEach(issue => {
            try {
                const color = getMarkerColor(issue);
                
                const marker = L.circleMarker([issue.location.lat, issue.location.lng], {
                    radius: issue.priority === 'Critical' ? 12 : issue.priority === 'High' ? 10 : 8,
                    fillColor: color,
                    color: color,
                    weight: 2,
                    opacity: 0.8,
                    fillOpacity: 0.6
                });
                
                const popupContent = `
                    <div style="max-width: 200px; font-family: system-ui;">
                        <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #1e40af;">${issue.title}</h4>
                        <div style="font-size: 11px; color: #9ca3af;">
                            <strong>स्थिति:</strong> ${issue.status}<br>
                            <strong>प्राथमिकता:</strong> ${issue.priority}<br>
                            <strong>वोट:</strong> ${issue.votes}
                        </div>
                    </div>
                `;
                
                marker.bindPopup(popupContent);
                marker.addTo(map);
            } catch (error) {
                console.warn('Error adding heat map marker for issue:', issue.id, error);
            }
        });
    }

    // FIXED: Robust navigation system
    navigateToPage(pageId) {
        console.log('FIXED: Navigating to page:', pageId);
        
        try {
            // Destroy maps when leaving pages with maps
            this.destroyMapsForCurrentPage();
            
            const allPages = document.querySelectorAll('.page');
            allPages.forEach(page => {
                page.classList.remove('active');
            });

            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
                this.currentPage = pageId;
                
                this.updateNavigation();

                // Close mobile menu
                const navMenu = document.getElementById('navbar-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const navToggle = document.getElementById('navbar-toggle');
                    if (navToggle) {
                        navToggle.setAttribute('aria-expanded', 'false');
                    }
                }

                // Scroll to top smoothly
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Initialize page with proper timing for maps
                setTimeout(() => {
                    this.initializePage(pageId);
                }, 100);
                
                console.log('FIXED: Navigation successful to:', pageId);
            } else {
                console.error('Target page not found:', pageId);
            }
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }

    // FIXED: Destroy maps based on current page before navigation
    destroyMapsForCurrentPage() {
        console.log('Destroying maps for current page:', this.currentPage);
        
        switch (this.currentPage) {
            case 'home':
                this.destroyMap('heroMap');
                break;
            case 'report':
                this.destroyMap('locationMap');
                break;
            case 'transparency':
                this.destroyMap('transparencyMap');
                break;
        }
    }

    updateNavigation() {
        document.querySelectorAll('.navbar__link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === this.currentPage) {
                link.classList.add('active');
            }
        });
    }

    setupNavigation() {
        this.updateNavigation();
    }

    // FIXED: Enhanced page initialization with proper map timing
    initializePage(pageId) {
        console.log('FIXED: Initializing page:', pageId);
        
        switch (pageId) {
            case 'home':
                this.populateTestimonials();
                setTimeout(() => this.initializeHeroMap(), 100);
                break;
            case 'dashboard':
                this.populateUserDashboard();
                break;
            case 'admin':
                this.populateAdminDashboard();
                break;
            case 'transparency':
                setTimeout(() => {
                    this.initializeCharts();
                    setTimeout(() => this.initializeTransparencyMap(), 100);
                }, 200);
                break;
            case 'report':
                this.resetReportForm();
                setTimeout(() => this.initializeLocationMap(), 100);
                break;
            case 'support':
                setTimeout(() => this.setupSupportSystem(), 50);
                break;
        }
    }

    populateInitialData() {
        console.log('Populating initial data...');
        
        const categorySelect = document.getElementById('issue-category');
        if (categorySelect && this.civicData.categories) {
            categorySelect.innerHTML = '<option value="">श्रेणी चुनें</option>';
            Object.keys(this.civicData.categories).forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });

            categorySelect.addEventListener('change', (e) => {
                this.populateSubcategories(e.target.value);
            });
        }
    }

    populateSubcategories(category) {
        const subcategorySelect = document.getElementById('issue-subcategory');
        if (subcategorySelect && this.civicData.categories[category]) {
            subcategorySelect.innerHTML = '<option value="">उप-श्रेणी चुनें</option>';
            this.civicData.categories[category].forEach(subcategory => {
                const option = document.createElement('option');
                option.value = subcategory;
                option.textContent = subcategory;
                subcategorySelect.appendChild(option);
            });
        }
    }

    populateTestimonials() {
        const carousel = document.getElementById('testimonials-carousel');
        if (carousel && this.civicData.testimonials) {
            carousel.innerHTML = '';
            this.civicData.testimonials.forEach(testimonial => {
                const testimonialElement = document.createElement('div');
                testimonialElement.className = 'testimonial';
                testimonialElement.innerHTML = `
                    <div class="testimonial__content">"${testimonial.comment}"</div>
                    <div class="testimonial__author">
                        <div>
                            <div class="testimonial__name">${testimonial.name}</div>
                            <div class="testimonial__location">${testimonial.location}</div>
                        </div>
                        <div class="testimonial__rating">${'⭐'.repeat(testimonial.rating)}</div>
                    </div>
                `;
                carousel.appendChild(testimonialElement);
            });
            console.log('Testimonials populated');
        }
    }

    populateUserDashboard() {
        const issuesList = document.getElementById('user-issues-list');
        if (issuesList && this.civicData.civic_issues) {
            issuesList.innerHTML = '';
            
            this.civicData.civic_issues.slice(0, 3).forEach(issue => {
                const issueElement = this.createIssueCard(issue, true);
                issuesList.appendChild(issueElement);
            });
            console.log('User dashboard populated');
        }
    }

    populateAdminDashboard() {
        const adminTable = document.getElementById('admin-issues-table');
        if (adminTable && this.civicData.civic_issues) {
            adminTable.innerHTML = '';
            
            this.civicData.civic_issues.forEach(issue => {
                const row = document.createElement('div');
                row.className = 'table-row';
                row.innerHTML = `
                    <div class="table-cell">
                        <input type="checkbox" name="issue-select" value="${issue.id}">
                    </div>
                    <div class="table-cell">${issue.id}</div>
                    <div class="table-cell">${issue.title}</div>
                    <div class="table-cell">${issue.category}</div>
                    <div class="table-cell">
                        <span class="issue-status ${issue.status.toLowerCase().replace(' ', '-')}">${issue.status}</span>
                    </div>
                    <div class="table-cell">
                        <span class="priority ${issue.priority.toLowerCase()}">${issue.priority}</span>
                    </div>
                    <div class="table-cell">${issue.department}</div>
                    <div class="table-cell">
                        <button class="btn btn--sm btn--outline">देखें</button>
                    </div>
                `;
                adminTable.appendChild(row);
            });
            console.log('Admin dashboard populated with', this.civicData.civic_issues.length, 'issues');
        }
    }

    createIssueCard(issue, showTimeline = false) {
        const issueCard = document.createElement('div');
        issueCard.className = 'issue-card';
        
        const timelineHTML = showTimeline ? `
            <div class="progress-timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-title">समस्या दर्ज की गई</div>
                        <div class="timeline-date">${new Date(issue.created_date).toLocaleDateString('hi-IN')}</div>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-title">समीक्षा में</div>
                        <div class="timeline-date">स्थिति अपडेट की गई</div>
                    </div>
                </div>
                ${issue.status === 'Resolved' ? `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-title">हल हो गई</div>
                        <div class="timeline-date">समस्या ठीक कर दी गई</div>
                    </div>
                </div>
                ` : ''}
            </div>
        ` : '';

        issueCard.innerHTML = `
            <div class="issue-header">
                <div>
                    <div class="issue-id">${issue.id}</div>
                    <h3 class="issue-title">${issue.title}</h3>
                    <p class="issue-description">${issue.description}</p>
                </div>
                <div class="issue-status ${issue.status.toLowerCase().replace(' ', '-')}">${issue.status}</div>
            </div>
            <div class="issue-meta">
                <span class="issue-location">📍 ${issue.location.name}</span>
                <span class="issue-date">📅 ${new Date(issue.created_date).toLocaleDateString('hi-IN')}</span>
                <span class="issue-priority">प्राथमिकता: ${issue.priority}</span>
                <span class="issue-votes">👍 ${issue.votes} वोट</span>
            </div>
            ${timelineHTML}
        `;
        
        return issueCard;
    }

    // Continue with other methods...
    setupReportForm() {
        const form = document.getElementById('issue-report-form');
        const nextBtn = document.getElementById('next-step');
        const prevBtn = document.getElementById('prev-step');

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextFormStep();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.prevFormStep();
            });
        }

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitIssueReport();
            });
        }

        this.setupFormComponents();
    }

    setupFormComponents() {
        // File upload handling
        const fileUploadArea = document.getElementById('file-upload-area');
        const fileInput = document.getElementById('issue-files');

        if (fileUploadArea && fileInput) {
            fileUploadArea.addEventListener('click', () => fileInput.click());

            fileUploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                fileUploadArea.classList.add('dragover');
            });

            fileUploadArea.addEventListener('dragleave', () => {
                fileUploadArea.classList.remove('dragover');
            });

            fileUploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                fileUploadArea.classList.remove('dragover');
                this.handleFileUpload(e.dataTransfer.files);
            });

            fileInput.addEventListener('change', (e) => {
                this.handleFileUpload(e.target.files);
            });
        }

        // Character count for description
        const descriptionField = document.getElementById('issue-description');
        const charCount = document.getElementById('char-count');

        if (descriptionField && charCount) {
            descriptionField.addEventListener('input', () => {
                const count = descriptionField.value.length;
                charCount.textContent = count;
                
                if (count > 800) {
                    charCount.style.color = '#dc2626';
                } else {
                    charCount.style.color = 'var(--color-text-secondary)';
                }

                if (count > 50) {
                    this.showAISuggestion(descriptionField.value);
                }
            });
        }

        // Anonymous reporting toggle
        const anonymousToggle = document.getElementById('anonymous-report');
        const contactFields = document.getElementById('contact-fields');

        if (anonymousToggle && contactFields) {
            anonymousToggle.addEventListener('change', () => {
                contactFields.style.display = anonymousToggle.checked ? 'none' : 'block';
            });
        }

        // Geolocation
        const detectLocationBtn = document.getElementById('detect-location');
        if (detectLocationBtn) {
            detectLocationBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.detectLocation();
            });
        }
    }

    nextFormStep() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        const nextStepElement = document.querySelector(`.form-step[data-step="${this.currentStep + 1}"]`);

        if (this.validateCurrentStep() && nextStepElement) {
            currentStepElement.classList.remove('active');
            nextStepElement.classList.add('active');

            const currentProgressStep = document.querySelector(`.progress-step[data-step="${this.currentStep}"]`);
            const nextProgressStep = document.querySelector(`.progress-step[data-step="${this.currentStep + 1}"]`);
            
            if (currentProgressStep) currentProgressStep.classList.remove('active');
            if (nextProgressStep) nextProgressStep.classList.add('active');

            this.currentStep++;
            this.updateFormButtons();

            if (this.currentStep === 4) {
                this.populateReviewSummary();
            }

            this.showToast(`चरण ${this.currentStep} / 4`, 'info');
        }
    }

    prevFormStep() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        const prevStepElement = document.querySelector(`.form-step[data-step="${this.currentStep - 1}"]`);

        if (prevStepElement) {
            currentStepElement.classList.remove('active');
            prevStepElement.classList.add('active');

            const currentProgressStep = document.querySelector(`.progress-step[data-step="${this.currentStep}"]`);
            const prevProgressStep = document.querySelector(`.progress-step[data-step="${this.currentStep - 1}"]`);
            
            if (currentProgressStep) currentProgressStep.classList.remove('active');
            if (prevProgressStep) prevProgressStep.classList.add('active');

            this.currentStep--;
            this.updateFormButtons();
        }
    }

    updateFormButtons() {
        const nextBtn = document.getElementById('next-step');
        const prevBtn = document.getElementById('prev-step');
        const submitBtn = document.getElementById('submit-report');

        if (nextBtn) nextBtn.style.display = this.currentStep < 4 ? 'inline-flex' : 'none';
        if (prevBtn) prevBtn.style.display = this.currentStep > 1 ? 'inline-flex' : 'none';
        if (submitBtn) submitBtn.style.display = this.currentStep === 4 ? 'inline-flex' : 'none';
    }

    validateCurrentStep() {
        if (this.currentStep === 1) {
            const addressField = document.getElementById('issue-address');
            if (!addressField || !addressField.value.trim()) {
                this.showToast('कृपया स्थान या पता प्रदान करें', 'error');
                return false;
            }
        }
        return true;
    }

    handleFileUpload(files) {
        Array.from(files).forEach(file => {
            if (file.size > 5 * 1024 * 1024) {
                this.showToast('फाइल का आकार 5MB से कम होना चाहिए', 'error');
                return;
            }

            const fileObj = {
                file: file,
                name: file.name,
                size: file.size,
                type: file.type,
                preview: null
            };

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    fileObj.preview = e.target.result;
                    this.uploadedFiles.push(fileObj);
                    this.displayUploadedFiles();
                };
                reader.readAsDataURL(file);
            } else {
                this.uploadedFiles.push(fileObj);
                this.displayUploadedFiles();
            }
        });
    }

    displayUploadedFiles() {
        const container = document.getElementById('uploaded-files');
        if (!container) return;

        container.innerHTML = '';
        this.uploadedFiles.forEach((file, index) => {
            const fileElement = document.createElement('div');
            fileElement.className = 'uploaded-file';
            
            const preview = file.preview ? 
                `<img src="${file.preview}" alt="Preview" class="file-preview">` :
                `<div class="file-icon" style="height: 100px; display: flex; align-items: center; justify-content: center; background: var(--color-secondary); border-radius: var(--radius-sm);">📄</div>`;

            fileElement.innerHTML = `
                ${preview}
                <div class="file-name">${file.name}</div>
                <button type="button" class="file-remove" data-index="${index}">×</button>
            `;
            
            const removeBtn = fileElement.querySelector('.file-remove');
            removeBtn.addEventListener('click', () => this.removeFile(index));
            
            container.appendChild(fileElement);
        });
    }

    removeFile(index) {
        this.uploadedFiles.splice(index, 1);
        this.displayUploadedFiles();
        this.showToast('फाइल हटा दी गई', 'info');
    }

    showAISuggestion(description) {
        const suggestionElement = document.getElementById('ai-suggestion');
        const suggestionText = document.getElementById('ai-suggestion-text');
        
        if (suggestionElement && suggestionText) {
            let suggestion = 'आपके विवरण के आधार पर, यह एक ';
            
            if (description.toLowerCase().includes('गड्ढे') || description.toLowerCase().includes('सड़क')) {
                suggestion += 'सड़क और बुनियादी ढांचा मुद्दा लगता है। उप-श्रेणी के रूप में "गड्ढे" का चयन करने पर विचार करें।';
            } else if (description.toLowerCase().includes('लाइट') || description.toLowerCase().includes('रोशनी')) {
                suggestion += 'सार्वजनिक सुरक्षा मुद्दा लगता है। उप-श्रेणी के रूप में "स्ट्रीट लाइट काम नहीं कर रही" का चयन करने पर विचार करें।';
            } else if (description.toLowerCase().includes('पानी') || description.toLowerCase().includes('रिसाव')) {
                suggestion += 'पानी और सीवरेज मुद्दा लगता है। उप-श्रेणी के रूप में "पानी का रिसाव" का चयन करने पर विचार करें।';
            } else if (description.toLowerCase().includes('कचरा') || description.toLowerCase().includes('गंदगी')) {
                suggestion += 'कचरा प्रबंधन मुद्दा लगता है। उप-श्रेणी के रूप में "कचरा साफ नहीं हुआ" का चयन करने पर विचार करें।';
            } else {
                suggestion += 'सामान्य नागरिक मुद्दा लगता है। कृपया सबसे उपयुक्त श्रेणी का चयन करें।';
            }

            suggestionText.textContent = suggestion;
            suggestionElement.style.display = 'block';
        }
    }

    populateReviewSummary() {
        const summaryElement = document.getElementById('review-summary');
        if (!summaryElement) return;

        const address = document.getElementById('issue-address')?.value || 'निर्दिष्ट नहीं';
        const category = document.getElementById('issue-category')?.value || 'चयनित नहीं';
        const subcategory = document.getElementById('issue-subcategory')?.value || 'चयनित नहीं';
        const priority = document.getElementById('issue-priority')?.value || 'चयनित नहीं';
        const description = document.getElementById('issue-description')?.value || 'कोई विवरण नहीं';

        summaryElement.innerHTML = `
            <div class="summary-item">
                <span class="summary-label">स्थान:</span>
                <span class="summary-value">${address}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">श्रेणी:</span>
                <span class="summary-value">${category}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">उप-श्रेणी:</span>
                <span class="summary-value">${subcategory}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">प्राथमिकता:</span>
                <span class="summary-value">${priority}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">विवरण:</span>
                <span class="summary-value">${description.substring(0, 100)}${description.length > 100 ? '...' : ''}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">फाइलें:</span>
                <span class="summary-value">${this.uploadedFiles.length} फाइल(ें) संलग्न</span>
            </div>
        `;
    }

    submitIssueReport() {
        this.showToast('आपकी रिपोर्ट जमा की जा रही है...', 'info');
        
        setTimeout(() => {
            const issueId = 'SMD-' + String(Math.floor(Math.random() * 9000) + 1000);
            this.showToast(`रिपोर्ट सफलतापूर्वक जमा की गई! आपकी समस्या ID है ${issueId}`, 'success');
            
            setTimeout(() => {
                this.navigateToPage('dashboard');
                this.resetReportForm();
            }, 2000);
        }, 1500);
    }

    resetReportForm() {
        this.currentStep = 1;
        this.uploadedFiles = [];
        
        const form = document.getElementById('issue-report-form');
        if (form) form.reset();
        
        document.querySelectorAll('.form-step').forEach((step, index) => {
            step.classList.toggle('active', index === 0);
        });
        
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            step.classList.toggle('active', index === 0);
        });
        
        this.updateFormButtons();
        
        const uploadedFilesContainer = document.getElementById('uploaded-files');
        if (uploadedFilesContainer) uploadedFilesContainer.innerHTML = '';
        
        const aiSuggestion = document.getElementById('ai-suggestion');
        if (aiSuggestion) aiSuggestion.style.display = 'none';
    }

    detectLocation() {
        if (navigator.geolocation) {
            this.showToast('आपकी स्थिति का पता लगाया जा रहा है...', 'info');
            
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const addressField = document.getElementById('issue-address');
                    if (addressField) {
                        addressField.value = `स्थान: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
                        this.showToast('स्थान सफलतापूर्वक खोजी गई!', 'success');
                        
                        // Update location map if available
                        if (this.maps.locationMap) {
                            try {
                                this.maps.locationMap.setView([latitude, longitude], 15);
                                const marker = L.marker([latitude, longitude]).addTo(this.maps.locationMap);
                                marker.bindPopup('आपकी खोजी गई स्थिति').openPopup();
                            } catch (error) {
                                console.warn('Error updating location map:', error);
                            }
                        }
                    }
                },
                (error) => {
                    this.showToast('स्थिति खोजने में असमर्थ। कृपया पता मैन्युअल रूप से दर्ज करें।', 'error');
                }
            );
        } else {
            this.showToast('यह ब्राउज़र जियोलोकेशन का समर्थन नहीं करता।', 'error');
        }
    }

    // Simplified methods for brevity - only showing core functionality
    setupDashboardFilters() {
        const searchInput = document.getElementById('issue-search');
        const statusFilter = document.getElementById('status-filter');
        const exportBtn = document.getElementById('export-issues');

        if (searchInput) {
            searchInput.addEventListener('input', () => this.filterIssues());
        }

        if (statusFilter) {
            statusFilter.addEventListener('change', () => this.filterIssues());
        }

        if (exportBtn) {
            exportBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showToast('आपकी समस्याओं का डेटा निर्यात किया जा रहा है...', 'info');
                setTimeout(() => {
                    this.showToast('निर्यात पूर्ण हुआ! अपने डाउनलोड्स की जांच करें।', 'success');
                }, 1500);
            });
        }
    }

    filterIssues() {
        const searchTerm = document.getElementById('issue-search')?.value.toLowerCase() || '';
        const statusFilter = document.getElementById('status-filter')?.value || '';
        
        const issueCards = document.querySelectorAll('#user-issues-list .issue-card');
        
        issueCards.forEach(card => {
            const title = card.querySelector('.issue-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.issue-description')?.textContent.toLowerCase() || '';
            const status = card.querySelector('.issue-status')?.textContent || '';
            
            const matchesSearch = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm);
            const matchesStatus = !statusFilter || status === statusFilter;
            
            card.style.display = matchesSearch && matchesStatus ? 'block' : 'none';
        });
    }

    setupCommunityInteractions() {
        document.querySelectorAll('.vote-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const isUpvote = btn.classList.contains('upvote');
                const countSpan = btn.querySelector('span');
                const currentCount = parseInt(countSpan.textContent);
                
                if (btn.classList.contains('voted')) {
                    btn.classList.remove('voted');
                    countSpan.textContent = currentCount - 1;
                } else {
                    const otherBtn = btn.parentElement.querySelector(isUpvote ? '.downvote' : '.upvote');
                    if (otherBtn && otherBtn.classList.contains('voted')) {
                        otherBtn.classList.remove('voted');
                        const otherCount = parseInt(otherBtn.querySelector('span').textContent);
                        otherBtn.querySelector('span').textContent = otherCount - 1;
                    }
                    
                    btn.classList.add('voted');
                    countSpan.textContent = currentCount + 1;
                }
                
                this.showToast(`वोट ${btn.classList.contains('voted') ? 'दर्ज' : 'हटाया'} गया!`, 'success');
            });
        });
    }

    setupSupportSystem() {
        const supportOptions = document.querySelectorAll('.support-option');
        supportOptions.forEach((option, index) => {
            const btn = option.querySelector('button');
            if (btn) {
                // Remove existing event listeners by cloning the button
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);
                
                newBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log(`Support option ${index} clicked`);
                    this.hideSupportSections();
                    
                    if (index === 0) {
                        const chatbotInterface = document.getElementById('chatbot-interface');
                        if (chatbotInterface) {
                            console.log('Showing chatbot interface');
                            chatbotInterface.style.display = 'block';
                        }
                    } else if (index === 1) {
                        const faqSection = document.getElementById('faq-section');
                        if (faqSection) faqSection.style.display = 'block';
                    } else if (index === 2) {
                        const contactFormSection = document.getElementById('contact-form-section');
                        if (contactFormSection) contactFormSection.style.display = 'block';
                    }
                });
            }
        });

        this.setupChatbot();
    }

    hideSupportSections() {
        const sections = ['chatbot-interface', 'faq-section', 'contact-form-section'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.style.display = 'none';
        });
    }

    setupChatbot() {
        const sendBtn = document.getElementById('send-message');
        const chatInput = document.getElementById('chat-input');
        const closeChat = document.getElementById('close-chat');

        if (sendBtn && chatInput) {
            const sendMessage = async () => {
                const message = chatInput.value.trim();
                if (message && !this.isTyping) {
                    this.addChatMessage(message, 'user');
                    chatInput.value = '';
                    
                    this.showTypingIndicator();
                    
                    try {
                        const response = await this.getGeminiResponse(message);
                        this.hideTypingIndicator();
                        this.addChatMessage(response, 'bot');
                    } catch (error) {
                        this.hideTypingIndicator();
                        this.addChatMessage('मैं खुशी से तकनीकी कठिनाइयों का सामना कर रहा हूं। कृपया बाद में फिर से कोशिश करें या सहायता के लिए हमारी सहायता टीम से संपर्क करें।', 'bot');
                        console.error('Gemini API error:', error);
                    }
                }
            };

            sendBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sendMessage();
            });
            
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    sendMessage();
                }
            });
        }

        if (closeChat) {
            closeChat.addEventListener('click', (e) => {
                e.preventDefault();
                const chatInterface = document.getElementById('chatbot-interface');
                if (chatInterface) {
                    chatInterface.style.display = 'none';
                }
            });
        }

        document.querySelectorAll('.quick-question').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                const question = btn.getAttribute('data-question');
                if (!this.isTyping) {
                    this.addChatMessage(question, 'user');
                    this.showTypingIndicator();
                    
                    try {
                        const response = await this.getGeminiResponse(question);
                        this.hideTypingIndicator();
                        this.addChatMessage(response, 'bot');
                    } catch (error) {
                        this.hideTypingIndicator();
                        this.addChatMessage('मैं खुशी से तकनीकी कठिनाइयों का सामना कर रहा हूं। कृपया बाद में फिर से कोशिश करें या सहायता के लिए हमारी सहायता टीम से संपर्क करें।', 'bot');
                        console.error('Gemini API error:', error);
                    }
                }
            });
        });
    }

    async getGeminiResponse(userMessage) {
        const civicContext = `You are an AI assistant for Samadhan (समाधान), a civic issue reporting platform that connects Indian citizens with local government. 

Your role is to help users with (respond in Hindi primarily, but can use English when appropriate):
- नागरिक समस्याओं की रिपोर्टिंग (गड्ढे, स्ट्रीट लाइटें, पानी की समस्याएं, कचरा प्रबंधन, आदि)
- दर्ज की गई समस्याओं को ट्रैक करना
- प्लेटफॉर्म का नेवीगेशन
- नागरिक सहभागिता प्रक्रिया को समझना
- नगरपालिका सेवाओं के बारे में जानकारी प्रदान करना

Available issue categories in our system:
- सड़क और बुनियादी ढांचा (गड्ढे, क्षतिग्रस्त सड़कें, टूटे फुटपाथ)
- पानी और सीवरेज (पानी का रिसाव, आपूर्ति की समस्याएं, सीवेज समस्याएं)
- कचरा प्रबंधन (कचरा संग्रह, क्षतिग्रस्त डिब्बे, अवैध डंपिंग)
- सार्वजनिक सुरक्षा (स्ट्रीट लाइटें, गिरे पेड़, सुरक्षा खतरे)
- सार्वजनिक सुविधाएं (सार्वजनिक शौचालय, पार्क रखरखाव, बस स्टॉप)
- यातायात और परिवहन (ट्रैफिक सिग्नल, पार्किंग, जाम)
- पर्यावरण (वायु प्रदूषण, ध्वनि प्रदूषण, अवैध निर्माण)

Platform features:
- 4-चरणीय समस्या रिपोर्टिंग प्रक्रिया (स्थान → विवरण → मीडिया → समीक्षा)
- टाइमलाइन के साथ रियल-टाइम समस्या ट्रैकिंग
- समुदायिक मतदान और चर्चा
- विश्लेषण के साथ पारदर्शिता डैशबोर्ड
- औसत समाधान समय: 8.2 दिन
- विभागों से 97.8% प्रतिक्रिया दर

Be helpful, concise, and civic-focused in your responses. Primarily respond in Hindi but can use English terms when needed. If users ask about specific technical issues outside your scope, direct them to contact support.

User question: ${userMessage}`;

        const requestBody = {
            contents: [{
                parts: [{
                    text: civicContext
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1000,
                topP: 0.8,
                topK: 40
            }
        };

        try {
            const response = await fetch(`${this.geminiApiUrl}?key=${this.geminiApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error('Unexpected API response format');
            }
        } catch (error) {
            console.error('Gemini API error:', error);
            
            const fallbackResponse = this.getFallbackResponse(userMessage);
            if (fallbackResponse) {
                return fallbackResponse + '\n\n⚠️ नोट: AI सेवाएं वर्तमान में सीमित हैं। पूरी सहायता के लिए, कृपया हमारी सहायता टीम से संपर्क करें।';
            }
            
            throw error;
        }
    }

    getFallbackResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('रिपोर्ट') || lowerMessage.includes('समस्या') || lowerMessage.includes('report')) {
            return "समस्या रिपोर्ट करने के लिए: 1) नेवीगेशन में 'समस्या दर्ज करें' पर क्लिक करें 2) हमारी 4-चरणीय प्रक्रिया का पालन करें: स्थान → विवरण → मीडिया → समीक्षा 3) स्पष्ट विवरण और संभव हो तो फोटो प्रदान करें 4) जमा करें और अपनी ट्रैकिंग ID प्राप्त करें";
        } else if (lowerMessage.includes('ट्रैक') || lowerMessage.includes('स्थिति') || lowerMessage.includes('track')) {
            return "'मेरा डैशबोर्ड' में अपनी समस्याओं को ट्रैक करें जहां आप देखेंगे: • आपकी सभी दर्ज की गई समस्याएं • वर्तमान स्थिति और टाइमलाइन • विभागों से प्रगति अपडेट • अनुमानित समाधान समय";
        } else if (lowerMessage.includes('श्रेणी') || lowerMessage.includes('प्रकार') || lowerMessage.includes('category')) {
            return "हम इन समस्या श्रेणियों को संभालते हैं: सड़क और बुनियादी ढांचा, पानी और सीवरेज, कचरा प्रबंधन, सार्वजनिक सुरक्षा, सार्वजनिक सुविधाएं, यातायात और परिवहन, तथा पर्यावरण। प्रत्येक में विशिष्ट उप-श्रेणियां हैं जो आपकी समस्या को सही तरीके से भेजने में मदद करती हैं।";
        } else if (lowerMessage.includes('समय') || lowerMessage.includes('कितना') || lowerMessage.includes('time')) {
            return "हमारी प्लेटफॉर्म सांख्यिकी: • औसत समाधान समय: 8.2 दिन • विभागों से 97.8% प्रतिक्रिया दर • समस्याओं को आमतौर पर 24 घंटों के भीतर स्वीकार किया जाता है • गंभीर सुरक्षा समस्याओं को प्राथमिकता दी जाती है";
        }
        
        return null;
    }

    showTypingIndicator() {
        if (this.isTyping) return;
        
        this.isTyping = true;
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;

        const typingElement = document.createElement('div');
        typingElement.className = 'bot-message typing-indicator';
        typingElement.id = 'typing-indicator';
        typingElement.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span class="typing-text">AI सोच रहा है...</span>
            </div>
        `;
        
        chatMessages.appendChild(typingElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        this.isTyping = false;
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    addChatMessage(message, sender) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;

        const messageElement = document.createElement('div');
        messageElement.className = `${sender}-message`;
        
        const disclaimer = sender === 'bot' ? 
            '<div class="ai-disclaimer">💡 AI-जनरेटेड प्रतिक्रिया - कृपया महत्वपूर्ण विवरणों की हमारी सहायता टीम से पुष्टि करें।</div>' : '';
        
        messageElement.innerHTML = `
            <div class="message-content">${message}</div>
            ${disclaimer}
        `;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    setupFAQInteractions() {
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', (e) => {
                e.preventDefault();
                const faqItem = question.closest('.faq-item');
                const isOpen = faqItem.classList.contains('open');
                
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('open');
                });
                
                if (!isOpen) {
                    faqItem.classList.add('open');
                }
            });
        });
    }

    initializeCharts() {
        console.log('Initializing charts...');
        setTimeout(() => {
            this.createCategoryChart();
            this.createTrendsChart();
            this.createDepartmentChart();
            this.createAdminPerformanceChart();
        }, 200);
    }

    createCategoryChart() {
        const ctx = document.getElementById('category-chart');
        if (!ctx || !window.Chart) return;

        const data = {
            labels: ['सड़क और बुनियादी ढांचा', 'पानी और सीवरेज', 'कचरा प्रबंधन', 'सार्वजनिक सुरक्षा', 'सार्वजनिक सुविधाएं', 'यातायात और परिवहन', 'पर्यावरण'],
            datasets: [{
                data: [45, 32, 28, 25, 20, 18, 15],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C']
            }]
        };

        new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    createTrendsChart() {
        const ctx = document.getElementById('trends-chart');
        if (!ctx || !window.Chart) return;

        const data = {
            labels: ['जन', 'फर', 'मार', 'अप्र', 'मई', 'जून'],
            datasets: [
                {
                    label: 'रिपोर्ट की गई',
                    data: [65, 78, 90, 81, 95, 88],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true
                },
                {
                    label: 'हल की गई',
                    data: [45, 65, 75, 70, 80, 85],
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    fill: true
                }
            ]
        };

        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createDepartmentChart() {
        const ctx = document.getElementById('department-chart');
        if (!ctx || !window.Chart) return;

        const data = {
            labels: ['नगर निगम', 'यातायात पुलिस', 'पार्क विभाग', 'जल बोर्ड', 'सार्वजनिक सुरक्षा'],
            datasets: [{
                label: 'औसत समाधान समय (दिन)',
                data: [7, 6, 10, 5, 4],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
            }]
        };

        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'दिन'
                        }
                    }
                }
            }
        });
    }

    createAdminPerformanceChart() {
        const ctx = document.getElementById('admin-performance-chart');
        if (!ctx || !window.Chart) return;

        const data = {
            labels: ['सप्ताह 1', 'सप्ताह 2', 'सप्ताह 3', 'सप्ताह 4'],
            datasets: [
                {
                    label: 'हल की गई समस्याएं',
                    data: [23, 28, 31, 25],
                    backgroundColor: '#059669'
                },
                {
                    label: 'नई समस्याएं',
                    data: [35, 42, 38, 45],
                    backgroundColor: '#2563EB'
                }
            ]
        };

        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    setupModals() {
        const loginModal = document.getElementById('login-modal');
        const loginForm = document.getElementById('login-form');

        if (loginModal) {
            const closeModal = () => {
                loginModal.classList.add('hidden');
            };

            const overlay = loginModal.querySelector('.modal-overlay');
            if (overlay) {
                overlay.addEventListener('click', closeModal);
            }
            
            const closeBtn = loginModal.querySelector('.modal-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', closeModal);
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
                    closeModal();
                }
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.simulateLogin();
            });
        }
    }

    simulateLogin() {
        this.showToast('लॉगिन हो रहे हैं...', 'info');
        
        setTimeout(() => {
            this.isLoggedIn = true;
            this.currentUser = { name: 'राहुल शर्मा', email: 'rahul@email.com' };
            
            const loginBtn = document.getElementById('login-btn');
            if (loginBtn) {
                loginBtn.textContent = 'राहुल शर्मा';
                loginBtn.classList.remove('btn--secondary');
                loginBtn.classList.add('btn--primary');
            }
            
            const loginModal = document.getElementById('login-modal');
            if (loginModal) {
                loginModal.classList.add('hidden');
            }
            
            this.showToast('स्वागत है, राहुल!', 'success');
        }, 1000);
    }

    toggleLogin() {
        if (this.isLoggedIn) {
            this.logout();
        } else {
            const loginModal = document.getElementById('login-modal');
            if (loginModal) {
                loginModal.classList.remove('hidden');
            }
        }
    }

    logout() {
        this.isLoggedIn = false;
        this.currentUser = null;
        
        const loginBtn = document.getElementById('login-btn');
        if (loginBtn) {
            loginBtn.textContent = 'लॉगिन';
            loginBtn.classList.add('btn--secondary');
            loginBtn.classList.remove('btn--primary');
        }
        
        this.showToast('सफलतापूर्वक लॉगआउट हो गए', 'info');
    }

    toggleAdminView() {
        this.isAdminView = !this.isAdminView;
        const adminToggle = document.getElementById('admin-toggle');
        
        if (this.isAdminView) {
            if (adminToggle) {
                adminToggle.textContent = 'नागरिक दृश्य';
                adminToggle.classList.remove('btn--primary');
                adminToggle.classList.add('btn--secondary');
            }
            this.navigateToPage('admin');
        } else {
            if (adminToggle) {
                adminToggle.textContent = 'प्रशासन';
                adminToggle.classList.add('btn--primary');
                adminToggle.classList.remove('btn--secondary');
            }
            this.navigateToPage('home');
        }
    }

    detectTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-color-scheme', 'dark');
            this.updateThemeToggle('🌞');
        } else {
            document.documentElement.setAttribute('data-color-scheme', 'light');
            this.updateThemeToggle('🌙');
        }

        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                if (!localStorage.getItem('samadhan-theme')) {
                    document.documentElement.setAttribute('data-color-scheme', e.matches ? 'dark' : 'light');
                    this.updateThemeToggle(e.matches ? '🌞' : '🌙');
                }
            });
        }

        const savedTheme = localStorage.getItem('samadhan-theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-color-scheme', savedTheme);
            this.updateThemeToggle(savedTheme === 'dark' ? '🌞' : '🌙');
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        localStorage.setItem('samadhan-theme', newTheme);
        this.updateThemeToggle(newTheme === 'dark' ? '🌞' : '🌙');
        
        this.showToast(`${newTheme === 'dark' ? 'डार्क' : 'लाइट'} थीम पर स्विच किया गया`, 'success');
        
        this.refreshInputElements();
    }

    refreshInputElements() {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.classList.add('theme-refresh');
            setTimeout(() => {
                input.classList.remove('theme-refresh');
            }, 1);
        });
    }

    updateThemeToggle(icon) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = icon;
        }
    }

    categorizeIssuesByDepartment() {
        this.currentCategorization = 'department';
        this.updateCategorizationButtons();
        this.renderCategorizedIssues('department');
        this.showToast('समस्याओं को विभाग के अनुसार वर्गीकृत किया गया', 'success');
    }

    categorizeIssuesByPriority() {
        this.currentCategorization = 'priority';
        this.updateCategorizationButtons();
        this.renderCategorizedIssues('priority');
        this.showToast('समस्याओं को प्राथमिकता के अनुसार वर्गीकृत किया गया', 'success');
    }

    resetCategorization() {
        this.currentCategorization = null;
        this.updateCategorizationButtons();
        this.populateAdminDashboard();
        this.showToast('वर्गीकरण रीसेट किया गया', 'info');
    }

    updateCategorizationButtons() {
        const departmentBtn = document.getElementById('categorize-by-department');
        const priorityBtn = document.getElementById('categorize-by-priority');

        [departmentBtn, priorityBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });

        if (this.currentCategorization === 'department' && departmentBtn) {
            departmentBtn.classList.add('active');
        } else if (this.currentCategorization === 'priority' && priorityBtn) {
            priorityBtn.classList.add('active');
        }
    }

    renderCategorizedIssues(groupBy) {
        const adminTable = document.getElementById('admin-issues-table');
        if (!adminTable || !this.civicData.civic_issues) return;

        adminTable.innerHTML = '';
        const groupedIssues = this.groupIssues(this.civicData.civic_issues, groupBy);

        Object.keys(groupedIssues).sort().forEach(groupName => {
            const issues = groupedIssues[groupName];
            
            const groupHeader = document.createElement('div');
            groupHeader.className = 'group-header';
            groupHeader.innerHTML = `
                ${groupName}
                <span class="group-count">(${issues.length} समस्या${issues.length !== 1 ? 'एं' : ''})</span>
            `;
            adminTable.appendChild(groupHeader);

            const groupWrapper = document.createElement('div');
            groupWrapper.className = `${groupBy}-group`;
            
            issues.forEach(issue => {
                const row = document.createElement('div');
                row.className = 'table-row';
                row.innerHTML = `
                    <div class="table-cell">
                        <input type="checkbox" name="issue-select" value="${issue.id}">
                    </div>
                    <div class="table-cell">${issue.id}</div>
                    <div class="table-cell">${issue.title}</div>
                    <div class="table-cell">${issue.category}</div>
                    <div class="table-cell">
                        <span class="issue-status ${issue.status.toLowerCase().replace(' ', '-')}">${issue.status}</span>
                    </div>
                    <div class="table-cell">
                        <span class="priority ${issue.priority.toLowerCase()}">${issue.priority}</span>
                    </div>
                    <div class="table-cell">${issue.department}</div>
                    <div class="table-cell">
                        <button class="btn btn--sm btn--outline">देखें</button>
                    </div>
                `;
                groupWrapper.appendChild(row);
            });
            
            adminTable.appendChild(groupWrapper);
        });

        console.log(`Issues categorized by ${groupBy}`);
    }

    groupIssues(issues, groupBy) {
        const grouped = {};

        issues.forEach(issue => {
            let groupKey;
            if (groupBy === 'department') {
                groupKey = issue.department;
            } else if (groupBy === 'priority') {
                const priorityOrder = { 'Critical': 'A_गंभीर', 'High': 'B_उच्च', 'Medium': 'C_मध्यम', 'Low': 'D_कम' };
                groupKey = priorityOrder[issue.priority] || 'E_अन्य';
            } else {
                groupKey = 'अवर्गीकृत';
            }

            if (!grouped[groupKey]) {
                grouped[groupKey] = [];
            }
            grouped[groupKey].push(issue);
        });

        Object.keys(grouped).forEach(group => {
            grouped[group].sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
        });

        if (groupBy === 'priority') {
            const cleanGrouped = {};
            Object.keys(grouped).forEach(key => {
                const cleanKey = key.replace(/^[A-Z]_/, '');
                cleanGrouped[cleanKey] = grouped[key];
            });
            return cleanGrouped;
        }

        return grouped;
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'polite');

        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideOut 0.3s ease-in forwards';
                setTimeout(() => toast.remove(), 300);
            }
        }, 4000);

        if (!document.querySelector('#slide-out-style')) {
            const style = document.createElement('style');
            style.id = 'slide-out-style';
            style.textContent = `
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// FIXED: Initialize the app when DOM is loaded with proper error handling
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing FIXED Samadhan App...');
    try {
        window.samadhanApp = new SamadhanApp();
    } catch (error) {
        console.error('Failed to initialize Samadhan App:', error);
    }
});

// FIXED: Backup initialization for cases where DOMContentLoaded already fired
if (document.readyState !== 'loading') {
    setTimeout(() => {
        if (!window.samadhanApp) {
            console.log('Direct initialization triggered for FIXED app');
            try {
                window.samadhanApp = new SamadhanApp();
            } catch (error) {
                console.error('Failed to initialize Samadhan App via backup:', error);
            }
        }
    }, 100);
}