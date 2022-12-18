const unixDate = Date.now() / 1000

export const mockRacingResponse = {
  status: 200,
  data: {
    next_to_go_ids: [
      'e2f5d42a-6fb5-4884-bda2-6173ec86ea88',
      '19e24e1a-9df3-45c1-9575-b0cc23509d66',
      'a10dd876-bb8b-4bb0-9868-8e27eee59bf3',
      'e6a16d27-0999-454f-b18e-64cdf3a2e33a',
      'dbf156a3-1c08-459c-9bc5-51f880ff79aa',
      '2462cc80-c463-4931-8959-eff351e79a28',
      '9ed37f19-70e2-4f39-ac8c-2c2a7d765ab1',
      '000c8af4-77cb-4db7-a268-f1ecb4d75acf',
      'f24851e3-49ed-46f7-b6fd-2b8c08c037f8',
      '4c63953a-cc1b-48af-8047-bd91442f99f7',
    ],
    race_summaries: {
      '000c8af4-77cb-4db7-a268-f1ecb4d75acf': {
        race_id: '000c8af4-77cb-4db7-a268-f1ecb4d75acf',
        race_name: "Macey's Bistro",
        race_number: 1,
        meeting_id: '49cbc8ed-6f5c-4427-95a9-bc96953eb6ae',
        meeting_name: 'Warrnambool',
        category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
        advertised_start: {
          seconds: unixDate,
        },
        race_form: {
          distance: 390,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
            name: 'Good',
            short_name: 'good',
          },
          track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
          weather: {
            id: '5ba75165-3cec-11eb-88bb-36fbfdf5d97f',
            name: 'OCAST',
            short_name: 'ocast',
            icon_uri: 'OCAST',
          },
          weather_id: '5ba75165-3cec-11eb-88bb-36fbfdf5d97f',
          race_comment:
            "ASTON SKIPPER (8) was strong over this course and distance last time despite filling the minors, finishing 1.3 lengths behind That's Ivy's in 22.29 and recording a new PB here. Has the ability and expected to go close. ASTON MCENROE (2) made a promising debut when settling back and giving a start but getting home hard into third (22.76) at Ballarat over 390m. Can find the frame again this time. MINTY FRESHMAN (5) comes off an average run last start when eighth at Traralgon over 395m behind Minter Dominate (23.62) in a Maiden H. Comes out of a hot form race last start. Can figure in the finish. TANUI (7) is by Collision out of Lochinvar Sheike making debut. No public trials. Profiles well so watch market closely.",
          additional_data:
            '{"revealed_race_info":{"track_name":"","state":"","country":"","number":0,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            "ASTON SKIPPER (8) was strong over this course and distance last time despite filling the minors, finishing 1.3 lengths behind That's Ivy's in 22.29 and recording a new PB here. Has the ability and expected to go close. ASTON MCENROE (2) made a promising debut when settling back and giving a start but getting home hard into third (22.76) at Ballarat over 390m. Can find the frame again this time. MINTY FRESHMAN (5) comes off an average run last start when eighth at Traralgon over 395m behind Minter Dominate (23.62) in a Maiden H. Comes out of a hot form race last start. Can figure in the finish. TANUI (7) is by Collision out of Lochinvar Sheike making debut. No public trials. Profiles well so watch market closely.",
        },
        venue_id: 'a22fd48a-e601-46af-afca-349a5d706bca',
        venue_name: 'Warrnambool',
        venue_state: 'VIC',
        venue_country: 'AUS',
      },
      '19e24e1a-9df3-45c1-9575-b0cc23509d66': {
        race_id: '19e24e1a-9df3-45c1-9575-b0cc23509d66',
        race_name:
          'Ride High Vicbred Super Series (3Yo Colts \u0026 Geldings) (1St Heat)',
        race_number: 1,
        meeting_id: 'd28ff508-d257-45f2-984e-362c4cfe64b4',
        meeting_name: 'Kilmore',
        category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
        advertised_start: {
          seconds: unixDate - 3,
        },
        race_form: {
          distance: 2180,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
            name: 'Good',
            short_name: 'good',
          },
          track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
          weather: {
            id: '0b43a420-3b75-11e8-a5eb-06a5c6d9a756',
            name: 'Overcast',
            short_name: 'overcast',
            icon_uri: 'Overcast',
          },
          weather_id: '0b43a420-3b75-11e8-a5eb-06a5c6d9a756',
          race_comment:
            'BRUTALLY HANDSOME (1) comes off a win in a Breeders Crown consolation where he was prominent throughout from a low draw. Has the speed to take full advantage of the inside barrier and that will see him hard to beat. OFFYAROCKA CROCKER (5) was just under 6m behind BRUTALLY HANDSOME last start but he did have to work when parked. With better fortune he can make a race of it. MISSED THE TRUTH (2) continues to race well with a string of top-three finishes. Rarely out of the money at this distance and he is nicely drawn. HOT DEAL (10) comes from the back row but must be respected having won all three starts this time in.',
          additional_data:
            '{"revealed_race_info":{"track_name":"Kilmore","state":"VIC","country":"AUS","number":1,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            'BRUTALLY HANDSOME (1) comes off a win in a Breeders Crown consolation where he was prominent throughout from a low draw. Has the speed to take full advantage of the inside barrier and that will see him hard to beat. OFFYAROCKA CROCKER (5) was just under 6m behind BRUTALLY HANDSOME last start but he did have to work when parked. With better fortune he can make a race of it. MISSED THE TRUTH (2) continues to race well with a string of top-three finishes. Rarely out of the money at this distance and he is nicely drawn. HOT DEAL (10) comes from the back row but must be respected having won all three starts this time in.',
        },
        venue_id: '48a28e97-f247-470a-bf5b-860d68492bc3',
        venue_name: 'Kilmore',
        venue_state: 'VIC',
        venue_country: 'AUS',
      },
      '2462cc80-c463-4931-8959-eff351e79a28': {
        race_id: '2462cc80-c463-4931-8959-eff351e79a28',
        race_name: 'Hooked On Scotch At Stud',
        race_number: 12,
        meeting_id: '7a9c5bf4-ec33-4728-a81e-da4508fe5aba',
        meeting_name: 'Warragul',
        category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
        advertised_start: {
          seconds: unixDate - 6,
        },
        race_form: {
          distance: 400,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
            name: 'Good',
            short_name: 'good',
          },
          track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
          weather: {
            id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
            name: 'FINE',
            short_name: 'fine',
            icon_uri: 'FINE',
          },
          weather_id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
          race_comment:
            'WHY NOT AJAY (8) turned in a fair 4th placed finish last time at this track over 400m (23.19). Solid record here at the distance winning three races. Should bounce back. ZIPPING WINSLET (2) stalked the lead after a clean break from the tricky draw then burst clear to score (23.03) at Geelong in a Grade 5 over 400m. Recorded one of the quickest times on the card in scoring last start. Capable of going well again. CAPTAIN CRUISER (1) turned in a solid run last start over 395m at Traralgon finishing 5th and beaten only 2.5 lengths (23.18). Form from his last run is proving to be solid. Expected to feature in the finish. TUZLA BALE (7) has a solid strike rate from this box.',
          additional_data:
            '{"revealed_race_info":{"track_name":"","state":"","country":"","number":0,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            'WHY NOT AJAY (8) turned in a fair 4th placed finish last time at this track over 400m (23.19). Solid record here at the distance winning three races. Should bounce back. ZIPPING WINSLET (2) stalked the lead after a clean break from the tricky draw then burst clear to score (23.03) at Geelong in a Grade 5 over 400m. Recorded one of the quickest times on the card in scoring last start. Capable of going well again. CAPTAIN CRUISER (1) turned in a solid run last start over 395m at Traralgon finishing 5th and beaten only 2.5 lengths (23.18). Form from his last run is proving to be solid. Expected to feature in the finish. TUZLA BALE (7) has a solid strike rate from this box.',
        },
        venue_id: 'd0acc1ca-3548-4719-9145-a892a1e6e1c0',
        venue_name: 'Warragul',
        venue_state: 'VIC',
        venue_country: 'AUS',
      },
      '4c63953a-cc1b-48af-8047-bd91442f99f7': {
        race_id: '4c63953a-cc1b-48af-8047-bd91442f99f7',
        race_name: 'Race 12 - 820',
        race_number: 12,
        meeting_id: '4dd300c7-4840-4d9d-ada0-8515f8a413fb',
        meeting_name: 'Sonoda',
        category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
        advertised_start: {
          seconds: unixDate - 9,
        },
        race_form: {
          distance: 820,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
            name: 'Good',
            short_name: 'good',
          },
          track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
          race_comment:
            'LA LA KERRIA (12) pushed forward and led throughout to score a healthy win over 820m at this track last time. Has the early speed to cross from out wide and rates a top chance. AVOCADO (9) scored at her most recent appearance, getting home by 1.75 lengths over 1230m at this track. That continued the good form this campaign, with two wins from four runs. Tomohiro Sasada who has two wins when partnering stays on. Leading contender. NARITA BULL HAWK (8) missed the frame last time here. That followed a run of two wins on end. Shunya Hasebe who has scored on him two times retains the mount. Sure to be competitive. RED ACTEUR (5) can feature on best efforts.',
          additional_data:
            '{"revealed_race_info":{"track_name":"Sonoda","state":"JPN","country":"JPN","number":12,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            'LA LA KERRIA (12) pushed forward and led throughout to score a healthy win over 820m at this track last time. Has the early speed to cross from out wide and rates a top chance. AVOCADO (9) scored at her most recent appearance, getting home by 1.75 lengths over 1230m at this track. That continued the good form this campaign, with two wins from four runs. Tomohiro Sasada who has two wins when partnering stays on. Leading contender. NARITA BULL HAWK (8) missed the frame last time here. That followed a run of two wins on end. Shunya Hasebe who has scored on him two times retains the mount. Sure to be competitive. RED ACTEUR (5) can feature on best efforts.',
        },
        venue_id: '6916e1a3-1754-41cd-91a4-484f336aec64',
        venue_name: 'Sonoda',
        venue_state: 'JPN',
        venue_country: 'JPN',
      },
      '9ed37f19-70e2-4f39-ac8c-2c2a7d765ab1': {
        race_id: '9ed37f19-70e2-4f39-ac8c-2c2a7d765ab1',
        race_name: 'Wolf Signs Pace (Sky 2)',
        race_number: 10,
        meeting_id: 'ca308fc4-0668-4df7-9759-27b5a76c65c1',
        meeting_name: 'Redcliffe',
        category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
        advertised_start: {
          seconds: unixDate - 12,
        },
        race_form: {
          distance: 1780,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
            name: 'Good',
            short_name: 'good',
          },
          track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
          weather: {
            id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
            name: 'FINE',
            short_name: 'fine',
            icon_uri: 'FINE',
          },
          weather_id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
          race_comment:
            'A win looks imminent for MAJOR TRALEE (1) after a strong showing last week at Albion Park where he came from a wider draw for a 4.4m second. Looks nicely placed and gets every chance from the ace draw. UNDERTHEKILT (9) did a good jo to score a narrow but fighting last week at Albion Park. Cops a second row draw this time but could go on with the job. DUKE (7) is in a purple patch of form with back-to-back wins at this venue and he is drawn to get a nice trail. EXPLANATION NOTED (2) is improving with racing this time and will be close to peaking off a city placing from a similar draw last week.',
          additional_data:
            '{"revealed_race_info":{"track_name":"Redcliffe","state":"QLD","country":"AUS","number":10,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            'A win looks imminent for MAJOR TRALEE (1) after a strong showing last week at Albion Park where he came from a wider draw for a 4.4m second. Looks nicely placed and gets every chance from the ace draw. UNDERTHEKILT (9) did a good jo to score a narrow but fighting last week at Albion Park. Cops a second row draw this time but could go on with the job. DUKE (7) is in a purple patch of form with back-to-back wins at this venue and he is drawn to get a nice trail. EXPLANATION NOTED (2) is improving with racing this time and will be close to peaking off a city placing from a similar draw last week.',
        },
        venue_id: '218b33c5-342d-47bc-bbef-05546ca8dacb',
        venue_name: 'Redcliffe',
        venue_state: 'QLD',
        venue_country: 'AUS',
      },
      'a10dd876-bb8b-4bb0-9868-8e27eee59bf3': {
        race_id: 'a10dd876-bb8b-4bb0-9868-8e27eee59bf3',
        race_name: 'Dj Trackside 14 January (C1)',
        race_number: 7,
        meeting_id: '45a80c18-d788-4921-b488-92b023d34cd4',
        meeting_name: 'Ipswich',
        category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
        advertised_start: {
          seconds: unixDate - 15,
        },
        race_form: {
          distance: 1525,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '908a410f-ab10-11e7-85e3-0641c90711b8',
            name: 'Good3',
            short_name: 'good3',
          },
          track_condition_id: '908a410f-ab10-11e7-85e3-0641c90711b8',
          weather: {
            id: '01994c9e-3b74-11e8-a5eb-06a5c6d9a756',
            name: 'Fine',
            short_name: 'fine',
            icon_uri: 'Fine',
          },
          weather_id: '01994c9e-3b74-11e8-a5eb-06a5c6d9a756',
          race_comment:
            "GHOSTWRITER (3) made the placings first-up in a 75 and has more to give. In a top barn and is well-placed under the race conditions. Loy sticks and should manage the awkward gate. Saved from a winnable race for this. CRITICAL THINKER (2) resumes and Maloney's booking suggests he's pleasing. The recent trial was sharp and the low barrier advantages. He can come back improved. WESTERN HALO (10) led and folded up at the Sunshine Coast and best to go on the win and near-miss prior. Speedy and will be in it a long way. WHISTLING SPIRIT (11) is an improver deserving consideration.",
          additional_data:
            '{"revealed_race_info":{"track_name":"Ipswich","state":"QLD","country":"AUS","number":7,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            "GHOSTWRITER (3) made the placings first-up in a 75 and has more to give. In a top barn and is well-placed under the race conditions. Loy sticks and should manage the awkward gate. Saved from a winnable race for this. CRITICAL THINKER (2) resumes and Maloney's booking suggests he's pleasing. The recent trial was sharp and the low barrier advantages. He can come back improved. WESTERN HALO (10) led and folded up at the Sunshine Coast and best to go on the win and near-miss prior. Speedy and will be in it a long way. WHISTLING SPIRIT (11) is an improver deserving consideration.",
        },
        venue_id: '27687780-1159-46cf-9788-f97c6a77cc88',
        venue_name: 'Ipswich',
        venue_state: 'QLD',
        venue_country: 'AUS',
      },
      'dbf156a3-1c08-459c-9bc5-51f880ff79aa': {
        race_id: 'dbf156a3-1c08-459c-9bc5-51f880ff79aa',
        race_name: 'Race 4 - 900',
        race_number: 4,
        meeting_id: 'af92c324-8bad-4f1b-b1c3-289de804b2f3',
        meeting_name: 'Kawasaki',
        category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
        advertised_start: {
          seconds: unixDate - 18,
        },
        race_form: {
          distance: 900,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
            name: 'Good',
            short_name: 'good',
          },
          track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
          weather: {
            id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
            name: 'FINE',
            short_name: 'fine',
            icon_uri: 'FINE',
          },
          weather_id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
          race_comment:
            "LAVALIERE (8) was a hot favourite last start and led but couldn't see it out so may appreciate the shorter journey this time. Was racing well before that with a win and three placings from his previous four. Can bounce back. SKY ROCK (1) recorded a gutsy maiden victory last time out over 1000m at Mombetsu, scoring by one length. Inside draw will assist and he could go on with it. HARPY REX (3) ran below expectations when midfield last time when starting at $3.80 but recorded a string of top-four finishes before that. Can feature in the finish. PURPLE GOLD (7) looks a top-three prospect first up.",
          additional_data:
            '{"revealed_race_info":{"track_name":"Kawasaki","state":"JPN","country":"JPN","number":4,"race_name":"Race 4 - 900","time":"2022-12-15T07:30:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            "LAVALIERE (8) was a hot favourite last start and led but couldn't see it out so may appreciate the shorter journey this time. Was racing well before that with a win and three placings from his previous four. Can bounce back. SKY ROCK (1) recorded a gutsy maiden victory last time out over 1000m at Mombetsu, scoring by one length. Inside draw will assist and he could go on with it. HARPY REX (3) ran below expectations when midfield last time when starting at $3.80 but recorded a string of top-four finishes before that. Can feature in the finish. PURPLE GOLD (7) looks a top-three prospect first up.",
        },
        venue_id: '54fd43ae-62e7-4fff-a114-1ebd5378e3a7',
        venue_name: 'Kawasaki',
        venue_state: 'JPN',
        venue_country: 'JPN',
      },
      'e2f5d42a-6fb5-4884-bda2-6173ec86ea88': {
        race_id: 'e2f5d42a-6fb5-4884-bda2-6173ec86ea88',
        race_name: 'Ladbrokes Bet Ticker',
        race_number: 11,
        meeting_id: 'c93adb86-203f-43d3-aeee-14aceed4c56d',
        meeting_name: 'Gunnedah',
        category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
        advertised_start: {
          seconds: unixDate - 21,
        },
        race_form: {
          distance: 340,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
            name: 'Good',
            short_name: 'good',
          },
          track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
          weather: {
            id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
            name: 'FINE',
            short_name: 'fine',
            icon_uri: 'FINE',
          },
          weather_id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
          race_comment:
            'SUPER KEEN (7) has been racing well lately, making it two on end when saluting at this track last time over 340m in (19.92). Solid beginner and with a good start should have clear running out wide. The one to beat again. MY HACIENDA (8) has been beaten for early speed lately, last time finishing seventh (20.58) in a Grade 5 at this track. Has clocked an excellent 19.68 best time here at this trip. Likely to be about the mark. FIVE MILE ROSE (2) is progressing well with another good run, placing by 5.5 lengths (20.30) in a Grade 5 at this track. Leading chance. YULUWIRRI GIRL (3) should be thereabouts after filling a top-three spot at big odds most recently.',
          additional_data:
            '{"revealed_race_info":{"track_name":"","state":"","country":"","number":0,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            'SUPER KEEN (7) has been racing well lately, making it two on end when saluting at this track last time over 340m in (19.92). Solid beginner and with a good start should have clear running out wide. The one to beat again. MY HACIENDA (8) has been beaten for early speed lately, last time finishing seventh (20.58) in a Grade 5 at this track. Has clocked an excellent 19.68 best time here at this trip. Likely to be about the mark. FIVE MILE ROSE (2) is progressing well with another good run, placing by 5.5 lengths (20.30) in a Grade 5 at this track. Leading chance. YULUWIRRI GIRL (3) should be thereabouts after filling a top-three spot at big odds most recently.',
        },
        venue_id: 'bc9ab141-acf7-4043-a031-d2b03bba5b36',
        venue_name: 'Gunnedah',
        venue_state: 'NSW',
        venue_country: 'AUS',
      },
      'e6a16d27-0999-454f-b18e-64cdf3a2e33a': {
        race_id: 'e6a16d27-0999-454f-b18e-64cdf3a2e33a',
        race_name: 'Race 11 - 1400',
        race_number: 11,
        meeting_id: '88423fe8-3e45-4780-bd9a-ae6075de523e',
        meeting_name: 'Kasamatsu',
        category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
        advertised_start: {
          seconds: unixDate - 24,
        },
        race_form: {
          distance: 1400,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
            name: 'Good',
            short_name: 'good',
          },
          track_condition_id: '10a14653-a33d-11e7-810d-0a1a4ae29bd2',
          race_comment:
            'RECONNECT (3) was sixth in a 1400m contest at this track two weeks ago. Best figures measure up nicely. Go well. COSMO MY DEAR (7) turned in a moderate run over this journey last time when sixth at this track. Manato Kurosawa goes well on this four-year-old and is back on top today. Expecting a bold showing. YELLOW RENGYO (8) finished fifth over 1400m at this track last start, a less impressive effort than her fourth at this track the run before. Strong top-three chance on her best form. MOZU JAI KIRI (1) finished seventh last time at this track in a disappointing performance. Better than the latest run and worth including.',
          additional_data:
            '{"revealed_race_info":{"track_name":"Kasamatsu","state":"JPN","country":"JPN","number":11,"race_name":"Race 11 - 1400","time":"2022-12-15T07:30:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            'RECONNECT (3) was sixth in a 1400m contest at this track two weeks ago. Best figures measure up nicely. Go well. COSMO MY DEAR (7) turned in a moderate run over this journey last time when sixth at this track. Manato Kurosawa goes well on this four-year-old and is back on top today. Expecting a bold showing. YELLOW RENGYO (8) finished fifth over 1400m at this track last start, a less impressive effort than her fourth at this track the run before. Strong top-three chance on her best form. MOZU JAI KIRI (1) finished seventh last time at this track in a disappointing performance. Better than the latest run and worth including.',
        },
        venue_id: 'ee67caf8-e6db-4086-b31a-91bd79c8d8cd',
        venue_name: 'Kasamatsu',
        venue_state: 'JPN',
        venue_country: 'JPN',
      },
      'f24851e3-49ed-46f7-b6fd-2b8c08c037f8': {
        race_id: 'f24851e3-49ed-46f7-b6fd-2b8c08c037f8',
        race_name: 'Carols @ Penrith Showground Dec 17 Pace',
        race_number: 2,
        meeting_id: 'd13429dc-19df-4773-be82-c28246e66440',
        meeting_name: 'Penrith',
        category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
        advertised_start: {
          seconds: unixDate - 27,
        },
        race_form: {
          distance: 1720,
          distance_type: {
            id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
            name: 'Metres',
            short_name: 'm',
          },
          distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
          track_condition: {
            id: '1db9cab0-b747-11ea-80cf-6a390f79827e',
            name: 'Fast',
            short_name: 'fast',
          },
          track_condition_id: '1db9cab0-b747-11ea-80cf-6a390f79827e',
          weather: {
            id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
            name: 'FINE',
            short_name: 'fine',
            icon_uri: 'FINE',
          },
          weather_id: '08e5f78c-1a36-11eb-9269-cef03e67f1a3',
          race_comment:
            'KISSED BY A ROSE (6) is in a purple patch of form with back-to-back wins. Came from a similar barrier when scoring at Menangle then cruised home here last week. Up in grade but she is going well enough to take that step. BELL RIVERKID (2) drew wide at Menangle last time so worth forgiving that. Had produced some decent efforts here before that and can play a role from this barrier. SOUTHBOUND TRAIN (4) is better drawn than last start and had a similar barrier to this when he placed two back. SOLAR EXPRESS (10) must be respected having won two of her three starts this time in.',
          additional_data:
            '{"revealed_race_info":{"track_name":"Penrith","state":"NSW","country":"AUS","number":2,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
          generated: 1,
          silk_base_url: 'drr38safykj6s.cloudfront.net',
          race_comment_alternative:
            'KISSED BY A ROSE (6) is in a purple patch of form with back-to-back wins. Came from a similar barrier when scoring at Menangle then cruised home here last week. Up in grade but she is going well enough to take that step. BELL RIVERKID (2) drew wide at Menangle last time so worth forgiving that. Had produced some decent efforts here before that and can play a role from this barrier. SOUTHBOUND TRAIN (4) is better drawn than last start and had a similar barrier to this when he placed two back. SOLAR EXPRESS (10) must be respected having won two of her three starts this time in.',
        },
        venue_id: 'f00be2d6-0109-4fb4-bda8-8dee3a759d51',
        venue_name: 'Penrith',
        venue_state: 'NSW',
        venue_country: 'AUS',
      },
    },
  },
  message: 'Next 10 races from each category',
}
