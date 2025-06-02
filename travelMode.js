document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user inputs
    const location = document.getElementById('location').value.toLowerCase();
    const duration = document.getElementById('duration').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const goal = document.getElementById('goal').value;

    // Sample workout and diet plans based on the inputs
    const plans = {
        beach: {
            workout: `
                <h4>Beach Workout Plan</h4>
                <ul>
                    <li><strong>Morning Jog:</strong> 30 minutes (Approx. 300 calories burned)</li>
                    <li><strong>Bodyweight Exercises:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 21 calories burned)</li>
                            <li>Squats: 3 sets of 15-20 reps (Approx. 15 calories burned)</li>
                            <li>Planks: 3 sets of 30 seconds (Approx. 4.5 calories burned)</li>
                            <li>Burpees: 3 sets of 10 reps (Approx. 24 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~364.5 calories</li>
                </ul>
            `,
            diet: `
                <h4>Beach Diet Plan</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Oatmeal, Banana, Almonds (Total: 329 calories)</li>
                    <li><strong>Lunch:</strong> Grilled Chicken, Quinoa, Broccoli (Total: 644 calories)</li>
                    <li><strong>Dinner:</strong> Baked Salmon, Brown Rice, Salad (Total: 665 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1997 calories</li>
                </ul>
            `
        },
        mountain: {
            workout: `
                <h4>Mountain Workout Plan</h4>
                <ul>
                    <li><strong>Hiking:</strong> 1 hour (Approx. 400 calories burned)</li>
                    <li><strong>Strength Training:</strong> (With resistance bands)
                        <ul>
                            <li>Squats: 3 sets of 10-12 reps (Approx. 12 calories burned)</li>
                            <li>Lunges: 3 sets of 10-12 reps (Approx. 12 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-12 reps (Approx. 12 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~448 calories</li>
                </ul>
            `,
            diet: `
                <h4>Mountain Diet Plan</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Omelette, Toast (Total: 300 calories)</li>
                    <li><strong>Lunch:</strong> Grilled Chicken, Quinoa, Asparagus (Total: 614 calories)</li>
                    <li><strong>Dinner:</strong> Baked Chicken, Sweet Potato, Green Beans (Total: 380 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1994 calories</li>
                </ul>
            `
        },
        city: {
            workout: `
                <h4>City Workout Plan</h4>
                <ul>
                    <li><strong>City Walk:</strong> 1 hour (Approx. 250 calories burned)</li>
                    <li><strong>Bodyweight Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Jumping Jacks: 3 sets of 20 reps (Approx. 30 calories burned)</li>
                            <li>Mountain Climbers: 3 sets of 15 reps (Approx. 40 calories burned)</li>
                            <li>Tricep Dips: 3 sets of 10 reps ( Approx. 20 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~290 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Yogurt Parfait, Granola (Total: 350 calories)</li>
                    <li><strong>Lunch:</strong> Grilled Chicken Wrap, Carrot Sticks (Total: 550 calories)</li>
                    <li><strong>Dinner:</strong> Baked Cod, Quinoa, Steamed Vegetables (Total: 450 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1350 calories</li>
                </ul>
            `
        },
        goa: {
            workout: `
                <h4>City Workout Plan (Goa)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 15-minute beach walk along Baga Beach (Approx. 100 calories burned)</li>
                    <li><strong>Beach Workout Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Bodyweight Squats: 3 sets of 15 reps (Approx. 50 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 50 calories burned)</li>
                            <li>Burpees: 3 sets of 10 reps (Approx. 60 calories burned)</li>
                            <li>Jumping Jacks: 3 sets of 20 reps (Approx. 30 calories burned)</li>
                            <li>Plank: Hold for 1 minute, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~320-400 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Goa)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Poha with Vegetables and a Glass of Fresh Coconut Water (Total: 350 calories)</li>
                    <li><strong>Lunch:</strong> Fish Curry with Steamed Rice (Total: 600 calories)</li>
                    <li><strong>Snack:</strong> Prawn Crackers (Total: 200 calories)</li>
                    <li><strong>Dinner:</strong> Chicken Xacuti with Whole Wheat Roti (Total: 500 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1650 calories</li>
                </ul>
            `
        },
        chennai: {
            workout: `
                <h4>City Workout Plan (Chennai)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 15-minute walk along Marina Beach (Approx. 100 calories burned)</li>
                    <li><strong>Beach Workout Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Walking Lunges: 3 sets of 12 reps per leg (Approx. 50 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 50 calories burned)</li>
                            <li>Squats: 3 sets of 15 reps (Approx. 40 calories burned)</li>
                            <li>Burpees: 3 sets of 10 reps (Approx. 60 calories burned)</li>
                            <li>Plank: Hold for 1 minute, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~330-380 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Chennai)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Idli with Sambar and Coconut Chutney (Total: 350 calories)</li>
                    <li><strong>Lunch:</strong> Vegetable Biryani with Raita (Total: 600 calories)</li>
                    <li><strong>Snack:</strong> Murukku or Sundal (Total: 200 calories)</li>
                    <li><strong>Dinner:</strong> Grilled Fish with Vegetable Curry and Rice (Total: 500 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1650 calories</li>
                </ul>
            `
        },
        varanasi: {
            workout: `
                <h4>City Workout Plan (Varanasi)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 15-minute walk along the Ghats (Approx. 100 calories burned)</li>
                    <li><strong>Heritage Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Bodyweight Squats: 3 sets of 15 reps (Approx. 50 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 50 calories burned)</li>
                            <li>Walking Lunges: 3 sets of 12 reps per leg (Approx. 60 calories burned)</li>
                            <li>Jump Rope: 3 sets of 1 minute (Approx. 40 calories burned)</li>
                            <li>Plank: Hold for 1 minute, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~330-400 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Varanasi)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Kachori with Aloo Sabzi (Total: 400 calories)</li>
                    <li><strong>Lunch:</strong> Biryani with Raita (Total: 600 calories)</li>
                    <li><strong>Snack:</strong> Chaat (Total: 200 calories)</li>
                    <li><strong>Dinner:</strong> Tandoori Chicken with Salad (Total: 500 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1700 calories</li>
                </ul>
            `
        },
        kerala: {
            workout: `
                <h4>City Workout Plan (Kerala)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 15-minute walk along the backwaters (Approx. 100 calories burned)</li>
                    <li><strong>Nature Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Walking Lunges: 3 sets of 12 reps per leg (Approx. 50 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 50 calories burned)</li>
                            <li>Bodyweight Squats: 3 sets of 15 reps (Approx. 40 calories burned)</li>
                            <li>High Knees: 3 sets of 30 seconds (Approx. 40 calories burned)</li>
                            <li>Plank: Hold for 1 minute, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~310-400 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Kerala)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Appam with Stew (Total: 350 calories)</li>
                    <li><strong>Lunch:</strong> Kerala Sadya (Vegetarian Feast) (Total: 700 calories)</li>
                    <li><strong>Snack:</strong> Banana Chips (Total: 200 calories)</li>
                    <li><strong>Dinner:</strong> Grilled Fish with Rice and Curry (Total: 500 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1850 calories</li>
                </ul>
            `
        },
        rajasthan: {
            workout: `
                <h4>City Workout Plan (Rajasthan)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 15-minute walk in a local park (Approx. 100 calories burned)</li>
                    <li><strong>Cultural Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Bodyweight Squats: 3 sets of 15 reps (Approx. 50 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 50 calories burned)</li>
                            <li>Mountain Climbers: 3 sets of 15 reps (Approx. 40 calories burned)</li>
                            <li>Jumping Jacks: 3 sets of 20 reps (Approx. 30 calories burned)</li>
                            <li>Plank: Hold for 1 minute, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~300-400 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Rajasthan)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Dal Baati with Churma (Total: 500 calories)</li>
                    <li><strong>Lunch:</strong> Gatte ki Sabzi with Rice (Total: 600 calories)</li>
                    <li><strong>Snack:</strong> Kachori (Total: 250 calories)</li>
                    <li><strong>Dinner:</strong> Laal Maas with Roti (Total: 700 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~2050 calories</li>
                </ul>
            `
        },
        mumbai: {
            workout: `
                <h4>City Workout Plan (Mumbai)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 10-minute jog along Marine Drive (Approx. 120 calories burned)</li>
                    <li><strong>Stadium Steps Workout:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Stair Climbing: 5 minutes (Approx. 50 calories burned)</li>
                            <li>Push-Ups: 3 sets of 12 reps (Approx. 50 calories burned)</li>
                            <li>Side Lunges: 3 sets of 15 reps per leg (Approx. 40 calories burned)</li>
                            <li>Burpees: 3 sets of 8 reps (Approx. 60 calories burned)</li>
                            <li>Russian Twists: 3 sets of 15 reps (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~350-400 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Mumbai)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Upma with Coconut Chutney (Total: 400 calories)</li>
                    <li><strong>Lunch:</strong> Thalipeeth with Curd (Total: 600 calories)</li>
                    <li><strong>Snack:</strong> Dhokla (Total: 250 calories)</li>
                    <li><strong>Dinner:</strong> Prawn Curry with Steamed Rice (Total: 550 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1850 calories</li>
                </ul>
            `
        },
        delhi: {
            workout: `
                <h4>City Workout Plan (Delhi)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 10-minute brisk walk in Lodhi Garden (Approx. 100 calories burned)</li>
                    <li><strong>Heritage Walk Workout:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Walking Lunges: 3 sets of 15 reps per leg (Approx. 60 calories burned)</li>
                            <li>Chair Dips (using park benches): 3 sets of 10 reps (Approx. 40 calories burned)</li>
                            <li>High Knees: 3 sets of 30 seconds (Approx. 40 calories burned)</li>
                            <li>Plank to Push-Up: 3 sets of 8 reps (Approx. 50 calories burned)</li>
                            <li>Skaters: 3 sets of 10 reps per side (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~320-400 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Delhi)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Aloo Paratha with Curd (Total: 550 calories)</li>
                    <li><strong>Lunch:</strong> Rajma Chawal (Kidney Beans with Rice) (Total: 700 calories)</li>
                    <li><strong>Snack:</strong> Samosa (Total: 250 calories)</li>
                    <li><strong>Dinner:</strong> Tandoori Chicken with Roti (Total: 600 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~2100 calories</li>
                </ul>
            `
        },
        kolkata: {
            workout: `
                <h4>City Workout Plan (Kolkata)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 10-minute walk in Maidan Park (Approx. 100 calories burned)</li>
                    <li><strong>Park Workout Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Step-Ups on Park Benches: 3 sets of 12 reps (Approx. 40 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 50 calories burned)</li>
                            <li>Walking Lunges: 3 sets of 15 reps per leg (Approx. 60 calories burned)</li>
                            <li>Burpees: 3 sets of 8 reps (Approx. 60 calories burned)</li>
                            <li>Plank: Hold for 1 minute, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~340-400 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Kolkata)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Luchi with Aloo Dum (Total: 550 calories)</li>
                    <li><strong>Lunch:</strong> Fish Curry with Rice (Total: 650 calories)</li>
                    <li><strong>Snack:</strong> Mishti Doi (Total: 250 calories)</li>
                    <li><strong>Dinner:</strong> Chicken Biryani (Total: 700 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~2150 calories</li>
                </ul>
            `
        },
        bangalore: {
            workout: `
                <h4>City Workout Plan (Bangalore)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 10-minute jog in Cubbon Park (Approx. 100 calories burned)</li>
                    <li><strong>Outdoor Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Jumping Jacks: 3 sets of 20 reps (Approx. 30 calories burned)</li>
                            <li>Push-Ups: 3 sets of 12 reps (Approx. 50 calories burned)</li>
                            <li>Bodyweight Squats: 3 sets of 15 reps (Approx. 40 calories burned)</li>
                            <li>Tricep Dips on Park Benches: 3 sets of 10 reps (Approx. 30 calories burned)</li>
                            <li>Side Plank: Hold for 30 seconds each side, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~280-350 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Bangalore)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Rava Idli with Coconut Chutney (Total: 400 calories)</li>
                    <li><strong>Lunch:</strong> Bisi Bele Bath (Total: 600 calories)</li>
                    <li><strong>Snack:</strong> Mysore Pak (Total: 300 calories)</li>
                    <li><strong>Dinner:</strong> Chicken Curry with Roti (Total: 600 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1900 calories</li>
                </ul>
            `
        },
        hyderabad: {
            workout: `
                <h4>City Workout Plan (Hyderabad)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 10-minute walk around Hussain Sagar Lake (Approx. 100 calories burned)</li>
                    <li><strong>Lakeside Circuit:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Stair Climbing (at nearby steps): 5 minutes (Approx. 50 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 50 calories burned)</li>
                            <li>Walking Lunges: 3 sets of 12 reps per leg (Approx. 60 calories burned)</li>
                            <li>Burpees: 3 sets of 8 reps (Approx. 60 calories burned)</li>
                            <li>Plank: Hold for 1 minute, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~350-400 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Hyderabad)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Idli with Sambar (Total: 350 calories)</li>
                    <li><strong>Lunch:</strong> Hyderabadi Biryani (Total: 700 calories)</li>
                    <li><strong>Snack:</strong> Mirchi Ka Salan with Paratha (Total: 300 calories)</li>
                    <li><strong>Dinner:</strong> Mutton Curry with Rice (Total: 600 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1950 calories</li>
                </ul>
            `
        },
        mysore: {
            workout: `
                <h4>City Workout Plan (Mysore)</h4>
                <ul>
                    <li><strong>Warm-up:</strong> 10-minute walk around Mysore Palace (Approx. 100 calories burned)</li>
                    <li><strong>Heritage Circuit Workout:</strong> (Perform as a circuit, repeat 3 times)
                        <ul>
                            <li>Bodyweight Squats: 3 sets of 15 reps (Approx. 40 calories burned)</li>
                            <li>Push-Ups: 3 sets of 10-15 reps (Approx. 50 calories burned)</li>
                            <li>Tricep Dips on Benches: 3 sets of 10 reps (Approx. 40 calories burned)</li>
                            <li>Jumping Jacks: 3 sets of 20 reps (Approx. 30 calories burned)</li>
                            <li>Plank: Hold for 1 minute, 3 sets (Approx. 30 calories burned)</li>
                        </ul>
                    </li>
                    <li><strong>Total Estimated Calories Burned:</strong> ~290-350 calories</li>
                </ul>
            `,
            diet: `
                <h4>City Diet Plan (Mysore)</h4>
                <ul>
                    <li><strong>Breakfast:</strong> Ragi Mudde with Sambar (Total: 350 calories)</li>
                    <li><strong>Lunch:</strong> Mysore Biryani (Total: 650 calories)</li>
                    <li><strong>Snack:</strong> Mysore Pak (Total: 300 calories)</li>
                    <li><strong>Dinner:</strong> Vegetable Curry with Chapati (Total: 500 calories)</li>
                    <li><strong>Total Daily Calories:</strong> ~1800 calories</li>
                </ul>
            `
        }        
        
    };

    // Display workout and diet plans based on the user's input
    const workoutPlan = document.getElementById('workoutPlan');
    const dietPlan = document.getElementById('dietPlan');

    if (location in plans) {
        workoutPlan.innerHTML = plans[location].workout;
        dietPlan.innerHTML = plans[location].diet;
    } else {
        workoutPlan.innerHTML = 'Please select a valid travel destination.';
        dietPlan.innerHTML = 'Please select a valid travel destination.';
    }

    // Show the plan boxes
    workoutPlan.classList.add('visible');
    dietPlan.classList.add('visible');

    // show result container
    resultContainer = document.getElementById("resultContainer");
    resultContainer.style.display = 'block';
    resultContainer.style.opacity = '1';
});