const library = [
            // --- ESSENTIALS & COURTESIES ---
            { p: "ਹਾਂ", pr: "Haan", en: "Yes", hi: "हाँ", te: "అవును", e: "✅" },
            { p: "ਨਹੀਂ", pr: "Nahi", en: "No", hi: "नहीं", te: "కాదు", e: "❌" },
            { p: "ਕਿਰਪਾ ਕਰਕੇ", pr: "Kirpa karke", en: "Please", hi: "कृपया", te: "దయచేసి", e: "🙏" },
            { p: "ਮਾਫ਼ ਕਰਨਾ", pr: "Maaf karna", en: "Excuse me / Sorry", hi: "माफ़ करना", te: "క్షమించండి", e: "🙇" },
            { p: "ਜੀ ਆਇਆਂ ਨੂੰ", pr: "Ji aayan nu", en: "Welcome", hi: "स्वागत है", te: "స్వాగతం", e: "🙌" },
            { p: "ਅਲਵਿਦਾ", pr: "Alvida", en: "Goodbye", hi: "अलविदा", te: "సెలవు", e: "👋" },
            { p: "ਠੀਕ ਹੈ", pr: "Theek hai", en: "Okay / All right", hi: "ठीक है", te: "సరే", e: "👌" },
        
            // --- FAMILY ---
            { p: "ਮਾਂ", pr: "Maan", en: "Mother", hi: "माँ", te: "అమ్మ", e: "👩" },
            { p: "ਪਿਤਾ", pr: "Pita", en: "Father", hi: "पिता", te: "నాన్న", e: "👨" },
            { p: "ਭਰਾ", pr: "Bharaa", en: "Brother", hi: "भाई", te: "సహోదరుడు", e: "👦" },
            { p: "ਭੈਣ", pr: "Bhain", en: "Sister", hi: "बहन", te: "సోదరి", e: "👧" },
            { p: "ਦੋਸਤ", pr: "Dost", en: "Friend", hi: "दोस्त", te: "స్నేహితుడు", e: "🤝" },
        
            // --- DAILY LIFE & OBJECTS ---
            { p: "ਘਰ", pr: "Ghar", en: "House / Home", hi: "घर", te: "ఇల్లు", e: "🏠" },
            { p: "ਕਿਤਾਬ", pr: "Kitaab", en: "Book", hi: "किताब", te: "పుస్తకం", e: "📖" },
            { p: "ਗੱਡੀ", pr: "Gaddi", en: "Car / Vehicle", hi: "गाड़ी", te: "కారు", e: "🚗" },
            { p: "ਪੈਸੇ", pr: "Paise", en: "Money", hi: "पैसे", te: "డబ్బులు", e: "💵" },
            { p: "ਫੋਨ", pr: "Phon", en: "Phone", hi: "फ़ोन", te: "ఫోన్", e: "📱" },
            { p: "ਸਕੂਲ", pr: "Skool", en: "School", hi: "स्कूल", te: "బడి", e: "🏫" },
        
            // --- FOOD & DRINK ---
            { p: "ਦੁੱਧ", pr: "Dudh", en: "Milk", hi: "दूध", te: "పాలు", e: "🥛" },
            { p: "ਚਾਹ", pr: "Chaah", en: "Tea", hi: "चाय", te: "టీ", e: "☕" },
            { p: "ਫਲ", pr: "Phal", en: "Fruit", hi: "फल", te: "పండు", e: "🍌" },
            { p: "ਸਬਜ਼ੀ", pr: "Sabzee", en: "Vegetable", hi: "सब्जी", te: "కూరగాయ", e: "🥦" },
        
            // --- TIME & NUMBERS ---
            { p: "ਅੱਜ", pr: "Ajj", en: "Today", hi: "आज", te: "ఈరోజు", e: "📅" },
            { p: "ਕੱਲ੍ਹ", pr: "Kalh", en: "Tomorrow / Yesterday", hi: "कल", te: "రేపు / నిన్న", e: "⏳" },
            { p: "ਇੱਕ", pr: "Ikk", en: "One", hi: "एक", te: "ఒకటి", e: "1️⃣" },
            { p: "ਦੋ", pr: "Do", en: "Two", hi: "दो", te: "రెండు", e: "2️⃣" },
            { p: "ਤਿੰਨ", pr: "Tinn", en: "Three", hi: "तीन", te: "మూడు", e: "3️⃣" }

            // --- COLORS ---
            { p: "ਲਾਲ", pr: "Laal", en: "Red", hi: "लाल", te: "ఎరుపు", e: "🔴" },
            { p: "ਨੀਲਾ", pr: "Neela", en: "Blue", hi: "नीला", te: "నీలం", e: "🔵" },
            { p: "ਹਰਾ", pr: "Haraa", en: "Green", hi: "हरा", te: "ఆకుపచ్చ", e: "🟢" },
            { p: "ਪੀਲਾ", pr: "Peela", en: "Yellow", hi: "पीला", te: "పసుపు", e: "🟡" },
            { p: "ਕਾਲਾ", pr: "Kaala", en: "Black", hi: "काला", te: "నలుపు", e: "⚫" },
            { p: "ਚਿੱਟਾ", pr: "Chitta", en: "White", hi: "सफेद", te: "తెలుపు", e: "⚪" },
            { p: "ਗੁਲਾਬੀ", pr: "Gulaabi", en: "Pink", hi: "गुलाबी", te: "గులాబీ", e: "🌸" },
        
            // --- ANIMALS ---
            { p: "ਕੁੱਤਾ", pr: "Kutta", en: "Dog", hi: "कुत्ता", te: "కుక్క", e: "🐶" },
            { p: "ਬਿੱਲੀ", pr: "Billi", en: "Cat", hi: "बिल्ली", te: "పిల్లి", e: "🐱" },
            { p: "ਗਾਂ", pr: "Gaan", en: "Cow", hi: "गाय", te: "ఆవు", e: "🐄" },
            { p: "ਘੋੜਾ", pr: "Ghora", en: "Horse", hi: "घोड़ा", te: "గుర్రం", e: "🐴" },
            { p: "ਸ਼ੇਰ", pr: "Sher", en: "Lion", hi: "शेर", te: "సింహం", e: "🦁" },
            { p: "ਪੰਛੀ", pr: "Panchhi", en: "Bird", hi: "पक्षी", te: "పక్షి", e: "🐦" },
            { p: "ਮੱਛੀ", pr: "Machhi", en: "Fish", hi: "मछली", te: "చేప", e: "🐟" },
        
            // --- HUMAN BODY ---
            { p: "ਅੱਖ", pr: "Akkh", en: "Eye", hi: "आँख", te: "కన్ను", e: "👁️" },
            { p: "ਕੰਨ", pr: "Kann", en: "Ear", hi: "कान", te: "చెవి", e: "👂" },
            { p: "ਨੱਕ", pr: "Nakk", en: "Nose", hi: "नाक", te: "ముక్కు", e: "👃" },
            { p: "ਹੱਥ", pr: "Hatth", en: "Hand", hi: "हाथ", te: "చెయ్యి", e: "✋" },
            { p: "ਪੈਰ", pr: "Pair", en: "Foot / Leg", hi: "पैर", te: "కాలు", e: "🦶" },
            { p: "ਸਿਰ", pr: "Sir", en: "Head", hi: "सिर", te: "తల", e: "👤" },
            { p: "ਦਿਲ", pr: "Dil", en: "Heart", hi: "दिल", te: "గుండె", e: "❤️" },
        
            // --- NATURE & WEATHER ---
            { p: "ਸੂਰਜ", pr: "Sooraj", en: "Sun", hi: "सूरज", te: "సూర్యుడు", e: "☀️" },
            { p: "ਚੰਦ", pr: "Chand", en: "Moon", hi: "चाँद", te: "చంద్రుడు", e: "🌙" },
            { p: "ਅਸਮਾਨ", pr: "Asmaan", en: "Sky", hi: "आसमान", te: "ఆకాశం", e: "☁️" },
            { p: "ਮੀਂਹ", pr: "Meenh", en: "Rain", hi: "बारिश", te: "వర్షం", e: "🌧️" },
            { p: "ਹਵਾ", pr: "Hava", en: "Wind / Air", hi: "हवा", te: "గాలి", e: "💨" },
            { p: "ਅੱਗ", pr: "Agg", en: "Fire", hi: "आग", te: "నిప్పు", e: "🔥" },
            { p: "ਦਰਖਤ", pr: "Darakhat", en: "Tree", hi: "पेड़", te: "చెట్టు", e: "🌳" },
        
            // --- QUESTIONS & CONVERSATION ---
            { p: "ਇਹ ਕੀ ਹੈ?", pr: "Eh kee hai?", en: "What is this?", hi: "यह क्या है?", te: "ఇది ఏమిటి?", e: "❓" },
            { p: "ਇਹ ਕਿੱਥੇ ਹੈ?", pr: "Eh kitthe hai?", en: "Where is it?", hi: "यह कहाँ है?", te: "ఇది ఎక్కడ ఉంది?", e: "📍" },
            { p: "ਤੁਸੀਂ ਕੌਣ ਹੋ?", pr: "Tusi kaun ho?", en: "Who are you?", hi: "आप कौन हैं?", te: "మీరు ఎవరు?", e: "👤" },
            { p: "ਕਿਉਂ?", pr: "Kiyun?", en: "Why?", hi: "क्यों?", te: "ఎందుకు?", e: "🤔" },
            { p: "ਕਦੋਂ?", pr: "Kadon?", en: "When?", hi: "कब?", te: "ఎప్పుడు?", e: "🕒" },
        
            // --- ADJECTIVES & EMOTIONS ---
            { p: "ਖੁਸ਼", pr: "Khush", en: "Happy", hi: "खुश", te: "సంతోషం", e: "😊" },
            { p: "ਉਦਾਸ", pr: "Udaas", en: "Sad", hi: "उदास", te: "బాధ", e: "😢" },
            { p: "ਵੱਡਾ", pr: "Vadda", en: "Big", hi: "बड़ा", te: "పెద్ద", e: "🐘" },
            { p: "ਛੋਟਾ", pr: "Chhota", en: "Small", hi: "छोटा", te: "చిన్న", e: "🐭" },
            { p: "ਗਰਮ", pr: "Garam", en: "Hot", hi: "गरम", te: "వేడి", e: "🔥" },
            { p: "ਠੰਢਾ", pr: "Thandhaa", en: "Cold", hi: "ठंडा", te: "చల్లని", e: "❄️" },
            { p: "ਚੰਗਾ", pr: "Changa", en: "Good", hi: "अच्छा", te: "మంచి", e: "👍" },
            { p: "ਬੁਰਾ", pr: "Bura", en: "Bad", hi: "बुरा", te: "చెడు", e: "👎" },
            { p: "ਸੋਹਣਾ", pr: "Sohna", en: "Beautiful / Handsome", hi: "सुंदर", te: "అందమైన", e: "✨" }
        ];
